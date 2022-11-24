import React from 'react'
import BlogCard from './BlogCard'

const Blogpage = () => {
    const blogs = [
        {
            id: 1,
            title: "What are the different ways to manage a state in a React application?",
            img: "https://reactjs.org/logo-og.png",
            body: "JS is something you dont say"
        },
        {
            id: 2,
            title: "How does prototypical inheritance work?",
            img: "https://reactjs.org/logo-og.png",
            body: "JS is something you dont say"
        },
        {
            id: 3,
            title: "What is a unit test? Why should we write unit tests?",
            img: "https://reactjs.org/logo-og.png",
            body: "What is a unit test? Why should we write unit tests?"
        },
        {
            id: 4,
            title: "React vs. Angular vs. Vue?",
            img: "https://reactjs.org/logo-og.png",
            body: "JS is something you dont say"
        },
    ]
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='mt-12 text-4xl font-bold'>Blogs</h1>
            <p className='mt-2 text-lg'>React JS Question Answering</p>
            <div className='grid lg:grid-cols-3 gap-6 my-16'>
                {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
            </div>
        </div>
    )
}

export default Blogpage