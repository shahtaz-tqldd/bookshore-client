import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { GoPerson, GoVerified } from 'react-icons/go';
import useVerifiedUser from '../../../../hooks/useVerifiedUser';
import Loader from '../../../../components/Loader';

const ProductCard = ({ product, setProduct }) => {
    const { productName, location, resalePrice, originalPrice, imgProduct, usedPeriod, sellerName, sellerEmail } = product
    const [verifiedUser, verifiedUserLoading] = useVerifiedUser(sellerEmail)
    if(verifiedUserLoading){
        return <Loader/>
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl p-3 h-64">
            <figure className="w-[25%]"><img src={imgProduct} alt={productName} className="rounded-2xl h-full" /></figure>
            <div className="w-[75%] mx-5 my-2 flex flex-col">
                <h2 className="card-title">{productName}</h2>
                <p className='text-primary mt-auto'>Price: <span className='lg:text-2xl md:text-2xl text-xl font-bold '>{resalePrice} Taka</span></p>
                <small className=''>Original Price: {originalPrice} Taka | Used: {usedPeriod}</small>
                <div className='my-2'>
                    <span className='flex items-center'>
                        <GoPerson />&nbsp;<h3 className='font-bold'>{sellerName}</h3>&nbsp; {verifiedUser &&  <GoVerified  className='text-accent'/>}
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