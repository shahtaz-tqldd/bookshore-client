import React from 'react'
import TestimonialCard from './TestimonialCard'
import TestimonialModal from './TestimonialModal'

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: 'Shamsul Alam',
            location: 'Dhaka, Bangladesh',
            comment: 'This is an amazing site for buying and selling books',
            rating: 4.5,
            propic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        },
        {
            id: 2,
            name: 'Shamsul Alam',
            location: 'Dhaka, Bangladesh',
            comment: 'This is an amazing site for buying and selling books',
            rating: 4.5,
            propic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        },
        {
            id: 3,
            name: 'Shamsul Alam',
            location: 'Dhaka, Bangladesh',
            comment: 'This is an amazing site for buying and selling books',
            rating: 4.5,
            propic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        }
    ]
    return (
        <div className='my-12'>
            <div className='mb-8'>
                <h2 className='text-5xl font-bold'>Testimoial</h2>
                <p className='text-lg mt-2'>What People Say about Bookshore</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {reviews.map(review => <TestimonialCard key={review.id} review={review} />)}
            </div>
            <div className='mt-16 text-center'>
                <p>Want to Say Something about Bookshore?</p>
                <label htmlFor="testimonial-modal" className="btn btn-sm btn-outline btn-accent text-white mt-4 rounded-full">Write a Review</label>
                <TestimonialModal />
            </div>
        </div>
    )
}

export default Testimonial