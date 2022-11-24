import React from 'react'

const CategoryCard = ({ details }) => {
    const { categoryName, detail, img } = details
    return (
        <div className="card bg-base-100">
            <div className='flex items-start'>
                <figure><img src={img} alt={categoryName} className="w-32 p-2" /></figure>
                <div className="py-6 px-4">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>{detail}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary rounded-full">Browse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard