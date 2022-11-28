import React from 'react'
import { Link } from 'react-router-dom'

const AdvertiseCard = ({adItem}) => {
    const{imgProduct , productName, resalePrice, category, description} = adItem
    console.log(adItem)
    return (
        <div className="hero bg-base-200 lg:p-8 md:p-4 p-2">
            <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
                <img src={imgProduct} className="lg:w-1/3 md:w-1/4 w-2/3 rounded-lg shadow-2xl ml-6" alt={productName} />
                <div className='lg:w-1/2 md:w-2/3 w-full'>
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