import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ details }) => {
    const { categoryName, detail, img } = details
    return (
        <Link
            to={`/categories/${categoryName}`}
            className='rounded-2xl'
            style={{backgroundImage:"url(https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb1f0f6dd-7070-4929-bd50-00c8309d0fd1_4032x3024.jpeg)", backgroundSize:"cover"}}
            >
            <div className='bg-base-100 p-5 h-full hover:opacity-90 hover:bg-primary hover:text-white rounded-2xl transition duration-300'>
                <img src={img} alt={categoryName} className="w-20" />
                <h2 className="text-2xl font-bold mb-2">{categoryName}</h2>
                <p>{detail}</p>
            </div>
        </Link>
    )
}

export default CategoryCard