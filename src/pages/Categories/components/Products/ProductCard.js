import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';

const ProductCard = ({ product, setProduct }) => {
    const { productName, location, resalePrice, originalPrice, imgProduct, usedPeriod, sellerName } = product
    return (
        <div className="card card-side bg-base-100 shadow-xl p-3">
            <figure className="w-[40%]"><img src={imgProduct} alt={productName} className="rounded-2xl h-full" /></figure>
            <div className="w-[60%] mx-3 flex flex-col">
                <h2 className="card-title">{productName}</h2>
                <p className='text-primary mt-auto'>Resale Price: <span className='lg:text-2xl md:text-2xl text-xl font-bold '>{resalePrice} Taka</span></p>
                <small className=''>Original Price: {originalPrice} Taka | Used: {usedPeriod}</small>
                <div className='my-2'>
                    <span className='flex items-center'>
                        <GoPerson />&nbsp;<h3 className='font-bold'>{sellerName}</h3>
                    </span>
                    <span className='flex'>
                        <MdLocationPin /> &nbsp;<small>{location}</small>
                    </span>
                </div>
                <div>
                    <label htmlFor="productBuy-modal" onClick={()=>setProduct(product)} className="btn btn-primary btn-sm text-white">Buy Now</label>
                </div>
            </div>
        </div>
    )
}

export default ProductCard