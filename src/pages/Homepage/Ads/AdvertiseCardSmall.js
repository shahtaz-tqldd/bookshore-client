import React from 'react'
import { Link } from 'react-router-dom'
import { IoBookSharp } from 'react-icons/io5'
import { MdLocationPin } from 'react-icons/md'

const AdvertiseCardSmall = ({ adItem, index }) => {
	const { imgProduct, productName, resalePrice, category, originalPrice, location } = adItem
	let color;
	switch (category) {
		case 'Novel':
			color = 'text-[#19A7CE]'
			break;
		case 'Poetry':
			color = 'text-[#BE5A83]'
			break;
		case 'Academic':
			color = 'text-[#CEEDC7]'
			break;
		case 'Non Fiction':
			color = 'text-[#088395]'
			break;
		case 'Research and Journal':
			color = 'text-[#FF6D60]'
			break;
		default:
			color = 'text-[#F7D060]'
			break;
	}
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
					<Link to={`/categories/${category}`} className="btn btn-primary text-white px-5 btn-sm rounded-full normal-case">Buy Now</Link>
				</div>
			</div>
		</div>
	)
}

export default AdvertiseCardSmall
