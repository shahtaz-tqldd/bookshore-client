import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BlogCard from './BlogCard'

const Blogpage = () => {
    const {data: blogs =[]} = useQuery({
        queryKey: ["blogs"],
        queryFn: async()=>{
            const res = await fetch('https://bookshore-server.vercel.app/blogs')
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='mt-12 text-4xl font-bold'>Blogs</h1>
            <p className='mt-2 text-lg'>React JS Question Answering</p>
            <div className='grid lg:grid-cols-3 gap-6 my-16'>
                {blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
            </div>
        </div>
    )
}

export default Blogpage