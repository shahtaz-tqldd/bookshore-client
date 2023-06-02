import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import useTitle from '../../../hooks/useTitle'
import { IoBookSharp } from 'react-icons/io5'
import { handleCatColor } from '../../../tools/SwitchCase'
import { MdLocationPin } from 'react-icons/md'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'

const ProductPage = () => {
  const [selectedTab, setSelectedTab] = useState(1)
  const data = useLoaderData()
  const { _id, productName, location, resalePrice, originalPrice, imgProduct, sellerEmail, category, description, usedPeriod, sellerName, phone } = data
  console.log(data)
  const color = handleCatColor(category)
  useTitle(productName)
  return (
    <section className='max-w-[1200px] mx-auto pt-14 pb-20 flex gap-20'>
      <div className='lg:w-1/2 flex justify-center items-start'>
        <img src={imgProduct} alt='' className='w-1/2 object-contain' />
      </div>
      <div className='lg:w-1/2'>
        <div>
          <span className={`text-md flex items-center gap-2 ${color}`}><IoBookSharp />{category}</span>
          <h2 className='text-3xl font-bold mt-2 mb-10'>{productName}</h2>
          <h1 className='text-6xl'>BDT {resalePrice}</h1>
          <div className='flex gap-8 text-lg text-[#888] mt-4'>
            <div>Original Price : BDT {originalPrice} </div>
            <div>Used : {usedPeriod} </div>
          </div>

          <div className='flex items-center gap-2 mt-12 mb-12 text-xl'><MdLocationPin /> {location}</div>
          <Link to={`/checkout/${_id}`}>
            <PrimaryButton>Checkout</PrimaryButton>
          </Link>
        </div>
        <div className='mt-8'>
          <div class="tabs mb-5">
            <button onClick={() => setSelectedTab(1)} className={`tab tab-bordered ${selectedTab === 1 && 'tab-active'}`}>Description</button>
            <button onClick={() => setSelectedTab(2)} className={`tab tab-bordered ${selectedTab === 2 && 'tab-active'}`}>Seller Information</button>
          </div>
          {
            selectedTab === 1 &&
            <p>{description}</p>
          }
          {
            selectedTab === 2 &&
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{sellerName}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{sellerEmail}</td>
                    </tr>
                    <tr>
                      <th>Location</th>
                      <td>{location}</td>
                    </tr>
                    <tr>
                      <th>Contact</th>
                      <td>{phone}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default ProductPage