import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ details }) => {
    const { categoryName, detail, img,id } = details
    return (
        <div className="card bg-base-100 hover:shadow-lg m-3">
            <div className='flex items-start'>
                <figure><img src={img} alt={categoryName} className="w-32 p-2" /></figure>
                <div className="py-6 px-4">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>{detail}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/categories/${id}`}><button className="btn btn-accent w-32 btn-outline btn-sm pt-3 pb-6 mt-3 rounded-full">Browse</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard