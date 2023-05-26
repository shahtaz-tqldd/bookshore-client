import React, { useContext } from 'react'
import { MdLocationPin } from 'react-icons/md';
import { GoPerson, GoVerified } from 'react-icons/go';
import useVerifiedUser from '../../../../hooks/useVerifiedUser';
import { AuthContext } from '../../../../context/AuthProvider';

const ProductCard = ({ product, setProduct }) => {
    const { productName, location, resalePrice, originalPrice, imgProduct, usedPeriod, sellerName, sellerEmail, postDate } = product
    const [verifiedUser] = useVerifiedUser(sellerEmail)
    const { user } = useContext(AuthContext)

    return (
        <div className="flex bg-base-100 p-5 h-64 rounded-2xl hover:shadow-xl">
            <img src={imgProduct} alt={productName} className="w-[160px] h-full object-cover rounded-lg h-full" />
            <div className="pl-4 flex flex-col w-full">
                <h2 className="text-2xl font-bold">{productName}</h2>
                <p className='text-primary text-3xl mt-auto'>BDT {resalePrice}</p>
                <div className='text-xs flex gap-6'>
                    <span className=''>Original Price : {originalPrice} </span>
                    <span>Used : {usedPeriod}</span>
                </div>
                <div className='my-2'>
                    <span className='flex items-center'>
                        <GoPerson />&nbsp;<h3 className='font-bold'>{sellerName}</h3>&nbsp; {verifiedUser && <GoVerified className='text-accent' />}
                    </span>
                    <span className='flex'>
                        <MdLocationPin /> &nbsp;<span className='text-xs'>{location}</span>
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className='text-xs'>Posted: {postDate}</span>
                    {(user?.email !== sellerEmail) && <label htmlFor="productBuy-modal" onClick={() => setProduct(product)} className="btn btn-warning btn-sm text-white normal-case">Buy Now</label>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard