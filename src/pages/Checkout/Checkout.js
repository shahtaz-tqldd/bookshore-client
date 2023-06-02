import { format } from 'date-fns'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useLoaderData, useNavigate } from 'react-router-dom'
import ErrorMessage from '../../tools/ErrorMessage'
import { AuthContext } from '../../context/AuthProvider'

const Checkout = () => {
  const { user } = useContext(AuthContext)
  const product = useLoaderData()
  const { register, formState: { errors }, handleSubmit } = useForm()
  const buyingDate = format(new Date(), 'PP')
  const buyingTime = format(new Date(), 'p')
  const navigate = useNavigate()

  const handleBookingProduct = (data) => {
    const bookingProduct = {
      ...product,
      buyerName: user.displayName,
      buyerEmail: user.email,
      buyerPhone: data.buyerPhone,
      buyerLocation: data.buyerLocation,
      buyerImage: user.photoURL,
      buyingDate,
      buyingTime
    }
    fetch('https://bookshore-server.vercel.app/products/booked', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(bookingProduct)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          soldStatusToDB(product._id)
        }
      })
  }

  const soldStatusToDB = (id) => {
    fetch(`https://bookshore-server.vercel.app/products/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("You have successfully booked this book")
          navigate('/dashboard/booked-products')
        }
      })
  }
  return (
    <section className='max-w-[800px] mx-auto mt-10 mb-20 rounded-xl shadow-lg bg-base-100 p-10'>
      <div>
        <h3 className="font-bold text-xl text-primary mb-8">Check Out</h3>
        <form onSubmit={handleSubmit(handleBookingProduct)}>
          <input type="text" defaultValue={user.displayName} className="input input-bordered w-full my-2" disabled />
          <input type="text" defaultValue={user.email} className="input input-bordered w-full my-2" disabled />
          <input {...register("buyerPhone", { required: "Please provide your phone number" })} type="text" placeholder="Your Phone" className="input input-bordered w-full my-2" />
          {errors.buyerPhone && <ErrorMessage>{errors.buyerPhone.message}</ErrorMessage>}
          <input {...register("buyerLocation", { required: "Please provide a location" })} type="text" placeholder="Your Location" className="input input-bordered w-full my-2" />
          {errors.buyerLocation && <ErrorMessage>{errors.buyerLocation.message}</ErrorMessage>}
          <div className='mt-10 flex justify-end'>
            <button type='submit' className="btn btn-primary w-40 text-white">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Checkout
