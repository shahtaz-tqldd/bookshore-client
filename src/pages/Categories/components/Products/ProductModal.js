import { format } from 'date-fns'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../../../tools/ErrorMessage'

const ProductModal = ({ product, user }) => {
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
        fetch('http://localhost:5000/products/booked',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bookingProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged){
                    toast.success("You have successfully booked this book")
                    navigate('/dashboard/booked-products')
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="productBuy-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="productBuy-modal" className="btn btn-sm btn-error btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-8">Check Out</h3>
                    <form onSubmit={handleSubmit(handleBookingProduct)}>
                        <input type="text" value={product.productName} className="input input-bordered w-full my-2" disabled />
                        <input type="text" defaultValue={product.resalePrice + ' Taka'} className="input input-bordered w-full my-2" disabled />
                        <input type="text" defaultValue={user.displayName} className="input input-bordered w-full my-2" disabled />
                        <input type="text" defaultValue={user.email} className="input input-bordered w-full my-2" disabled />
                        <input {...register("buyerPhone", { required: "Please provide your phone number" })} type="text" placeholder="Your Phone" className="input input-bordered w-full my-2" />
                        {errors.buyerPhone && <ErrorMessage>{errors.buyerPhone.message}</ErrorMessage>}
                        <input {...register("buyerLocation", { required: "Please provide a location" })} type="text" placeholder="Your Location" className="input input-bordered w-full my-2" />
                        {errors.buyerLocation && <ErrorMessage>{errors.buyerLocation.message}</ErrorMessage>}
                        <div className="modal-action">
                            <button className="btn btn-primary w-40 text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductModal