import React from 'react'
import { Link } from 'react-router-dom'
import { IoBookSharp } from 'react-icons/io5'
import { MdLocationPin } from 'react-icons/md'
import { handleCatColor } from '../../../tools/SwitchCase'

const AdvertiseCardSmall = ({ adItem, index }) => {
	const { imgProduct, productName, resalePrice, category, originalPrice, location, _id } = adItem
	const color = handleCatColor(category)
	return (
		<div className={`lg:w-full md:w-1/2 w-full flex gap-4 p-4 ${(index === 0 && 'bg-[#FFD4B2]') || (index === 1 && 'bg-[#FCFFB2]')}`}>
			<figure className='w-1/3'>
				<img src={imgProduct} className="w-full" alt={productName} />
			</figure>
			<div className='w-2/3 flex flex-col gap-4'>
				<div>
					<span className={`text-xs flex items-center gap-2 ${color}`}><IoBookSharp />{category}</span>
					<h3 className="lg:text-lg text-md font-bold mb-3">{productName}</h3>
					<h1 className="text-2xl mt-3"> BDT {resalePrice}</h1>
					<div className='text-xs text-[#888]'>Original Price : BDT {originalPrice} </div>
					<div className='flex items-center gap-2 mt-4'><MdLocationPin /> {location}</div>
				</div>
				<div className='mt-auto'>
					<Link to={`/products/${_id}`} className="btn btn-primary text-white px-5 btn-sm rounded-full normal-case">Buy Now</Link>
				</div>
			</div>
		</div>
	)
}

export default AdvertiseCardSmall
