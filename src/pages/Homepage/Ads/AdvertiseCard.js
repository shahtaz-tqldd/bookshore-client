import React from 'react'
import { Link } from 'react-router-dom'
import { IoBookSharp } from 'react-icons/io5'
import { MdLocationPin } from 'react-icons/md'
import PrimaryButton from '../../../components/Buttons/PrimaryButton'
import { handleCatColor } from '../../../tools/SwitchCase'

const AdvertiseCard = ({ adItem }) => {
	const { imgProduct, productName, resalePrice, category, description, originalPrice, location, _id } = adItem
	const color = handleCatColor(category)
	return (
		<div className="h-full flex lg:flex-row md:flex-row flex-col gap-8 bg-[#B5D5C5] lg:p-10 md:p-6 p-4 items-center">
			<figure className='lg:w-1/3 md:w-1/3 w-full'>
				<img src={imgProduct} className="h-full object-contain shadow-xl" alt={productName} />
			</figure>
			<div className='lg:w-2/3 md:w-2/3 w-full h-full flex flex-col gap-5'>
				<div>
					<span className={`text-sm flex items-center gap-2 ${color}`}><IoBookSharp />{category}</span>
					<h3 className="text-2xl font-bold mb-2">{productName}</h3>
					<p className="leading-5">{description.slice(0, 120)}...</p>
					<h1 className="text-5xl mt-6">BDT {resalePrice}</h1>
					<div className='text-lg text-[#888]'>Original Price : BDT {originalPrice} </div>
					<div className='flex items-center gap-2 mt-6 text-xl'><MdLocationPin /> {location}</div>
				</div>
				<div className='mt-auto'>
					<Link to={`/products/${_id}`}>
						<PrimaryButton>Buy Now</PrimaryButton>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default AdvertiseCard
