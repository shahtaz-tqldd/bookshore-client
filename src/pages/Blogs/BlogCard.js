import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    const { question, _id, answer } = blog
    return (
        <Link to={`/blogs/${_id}`}>
            <div className="mb-10 opacity-70 hover:opacity-100 hover:translate-x-1 transition duration-300">
                <h2 className="text-2xl font-bold">{question}</h2>
                <p className="mt-2">{answer.slice(0, 140) + '...'}</p>
            </div>
        </Link>
    )
}

export default BlogCard