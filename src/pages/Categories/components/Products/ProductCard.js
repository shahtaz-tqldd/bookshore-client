import React, { useContext } from 'react'
import { MdLocationPin } from 'react-icons/md';
import { GoPerson, GoVerified } from 'react-icons/go';
import useVerifiedUser from '../../../../hooks/useVerifiedUser';
import Loader from '../../../../components/Loader';
import { AuthContext } from '../../../../context/AuthProvider';

const ProductCard = ({ product, setProduct }) => {
    const { productName, location, resalePrice, originalPrice, imgProduct, usedPeriod, sellerName, sellerEmail, postDate } = product
    const [verifiedUser, verifiedUserLoading] = useVerifiedUser(sellerEmail)
    const {user} = useContext(AuthContext)
    if (verifiedUserLoading) {
        return <Loader />
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl p-3 h-64">
            <figure className="w-[40%]"><img src={imgProduct} alt={productName} className="rounded-2xl h-full" /></figure>
            <div className="w-[60%] ml-3 flex flex-col">
                <h2 className="card-title">{productName}</h2>
                <p className='text-primary mt-auto'>Price: <span className='lg:text-2xl md:text-2xl text-xl font-bold '>{resalePrice} Taka</span></p>
                <small className=''>Original Price: {originalPrice} Taka | Used: {usedPeriod}</small>
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
                    {(user.email !== sellerEmail) && <label htmlFor="productBuy-modal" onClick={() => setProduct(product)} className="btn btn-primary btn-sm text-white">Buy Now</label>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard