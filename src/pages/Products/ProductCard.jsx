import React, { useContext } from 'react'
import { MdLocationPin } from 'react-icons/md';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, setProduct }) => {
	const { productName, location, resalePrice, originalPrice, imgProduct, sellerEmail, _id } = product
	const { user } = useContext(AuthContext)

	return (
		<div className="flex bg-[#fefefe] hover:bg-[#fff] p-4 h-64 rounded-lg hover:shadow-xl gap-4 hover:-translate-y-1 transition duration-300">
			<figure className='w-1/2'>
				<img src={imgProduct} alt={productName} className="w-full h-full object-cover rounded h-full" />
			</figure>
			<div className="w-1/2 flex flex-col">
				<h2 className="text-xl font-bold leading-6">{productName}</h2>
				<p className='text-primary text-3xl mt-auto mb-1'>BDT {resalePrice}</p>
				<div className='text-xs flex gap-6 mb-5'>
					<span className='text-[#888]'>Original Price : BDT {originalPrice} </span>
				</div>
				<span className='flex items-center gap-2 text-xs'>
					<MdLocationPin />{location}
				</span>

				<div className="flex justify-between items-end mt-5">
					{(user?.email !== sellerEmail) && <Link to={`/products/${_id}`} className="btn btn-sm btn-primary text-white rounded-full normal-case px-5">Buy Now</Link>}
				</div>
			</div>
		</div>
	)
}

export default ProductCard