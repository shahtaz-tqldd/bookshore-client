import React from 'react'
import { Link } from 'react-router-dom'

const AdvertiseCard = ({adItem}) => {
    const{imgProduct , productName, resalePrice, category, description} = adItem
    console.log(adItem)
    return (
        <div className="hero bg-base-200 p-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={imgProduct} className="w-1/3 rounded-lg shadow-2xl ml-6" alt={productName} />
                <div className='w-1/2'>
                    <h3 className="text-3xl font-bold mb-2">{productName}</h3>
                    <span className="text-sm bg-accent py-1 px-3 rounded text-white">{category}</span>
                    <h1 className="text-5xl font-bold mt-3"><span className='text-xl font-normal'>Price</span> {resalePrice} Taka</h1>
                    <p className="py-6 text-justify">{description.slice(0, 200)}</p>
                    <Link to={`/categories/${category}`} className="btn btn-primary text-white">Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default AdvertiseCard