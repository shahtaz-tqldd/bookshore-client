import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const BlogDetails = () => {
    const data = useLoaderData()
    const { question, answer, img } = data
    useTitle(question)
    return (
        <div className='max-w-[1200px] px-4 mx-auto relative'>
            <div className="fixed top-24 left-40">
                <Link to='/blogs' className="flex items-center"><BsArrowLeft />&nbsp; Go Back</Link>
            </div>
            <div className="max-w-[800px] mx-auto mt-8 mb-24">
                <img src={img} alt="react" className="w-full rounded-2xl h-full object-contain" />
                <h1 className="text-3xl font-bold mt-4 mb-8">{question}</h1>
                <p dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </div>
    )
}

export default BlogDetails