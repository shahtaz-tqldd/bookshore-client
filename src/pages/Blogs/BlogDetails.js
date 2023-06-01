import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const BlogDetails = () => {
    const data = useLoaderData()
    const { question, answer, img } = data
    useTitle(question)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="mt-6 ml-32"><Link to='/blogs' className="flex items-center"><BsArrowLeft/>&nbsp; Go Back</Link></div>
            <div className="text-center mb-6">
                <h1 className='mt-12 text-4xl font-bold'>Blogs</h1>
                <p className='mt-2 text-lg'>React JS Question Answering</p>
            </div>
            <div className="max-w-[800px] mx-auto px-4 mb-24">
                <img src={img} alt="react" className="w-full"/>
                <h1 className="text-3xl font-bold mt-4 mb-8">{question}</h1>
                <p dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </div>
    )
}

export default BlogDetails