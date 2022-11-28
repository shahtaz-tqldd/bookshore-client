import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    const { question, _id } = blog
    return (
        <Link to={`/blogs/${_id}`}>
            <div className="border-2 border-primary bg-base-100 hover:shadow-lg hover:bg-primary hover:text-white px-4 py-6 h-52 rounded-lg">
                <img src="https://cdn-icons-png.flaticon.com/512/3722/3722637.png" alt="js question" className="w-16" />
                <h2 className="card-title mt-3">{question}</h2>
            </div>
        </Link>
    )
}

export default BlogCard