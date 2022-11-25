import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ details }) => {
    const { categoryName, detail, img } = details
    return (
        <div className="card bg-base-100 hover:shadow-lg m-3">
            <div className='flex items-start h-48'>
                <figure className='w-[25%]'><img src={img} alt={categoryName} className="w-32 p-2" /></figure>
                <div className="w-[75%] py-6 pl-2 pr-4 flex flex-col">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>{detail}</p>
                    <div className="text-end absolute bottom-5 right-5">
                        <Link to={`/categories/${categoryName}`}><button className="btn btn-accent w-32 btn-outline btn-sm pt-3 pb-6 mt-3 rounded-full">Browse</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard