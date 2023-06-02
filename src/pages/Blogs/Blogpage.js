import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BlogCard from './BlogCard'
import useTitle from '../../hooks/useTitle'

const Blogpage = () => {
    useTitle('Blogs')
    const {data: blogs =[]} = useQuery({
        queryKey: ["blogs"],
        queryFn: async()=>{
            const res = await fetch('https://bookshore-server.vercel.app/blogs')
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='max-w-[1200px] mx-auto pb-40 px-4'>
            <h1 className='mt-12 text-3xl text-primary font-bold'>Read Short Blogs</h1>
            <div className='mt-10 max-w-[600px]'>
                {blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
            </div>
        </div>
    )
}

export default Blogpage