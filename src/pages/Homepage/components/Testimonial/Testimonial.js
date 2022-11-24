import React from 'react'
import Slider from 'react-slick'
import { testimonialSettings } from '../../../../tools/Slider'
import TestimonialCard from './TestimonialCard'
import TestimonialModal from './TestimonialModal'

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: 'Shamsul Alam',
            location: 'Dhaka, Bangladesh',
            comment: 'This is an amazing site for buying and selling books. I have got one of my favourite book',
            rating: 4,
            propic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: 2,
            name: 'Ramisa Kabir',
            location: 'Comilla, Bangladesh',
            comment: 'Bookshore helped me to sell my book and I am blessed to have this kind of start',
            rating: 5,
            propic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        },
        {
            id: 3,
            name: 'Rabiul Islam Babu',
            location: 'Dhaka, Bangladesh',
            comment: 'I am not satisfied with the service. The way they did the service wasnt up to the mark',
            rating: 3,
            propic: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
        },
        {
            id: 4,
            name: 'Saima Tushti',
            location: 'Chittagong, Bangladesh',
            comment: 'Bookshore is a great place. I have introduced with a lot of books I can not imagine how thankful I am. This must be recommended.',
            rating: 4,
            propic: 'https://ilarge.lisimg.com/image/16776746/1080full-snezhana-yanchenko.jpg'
        }
    ]
    return (
        <div className='my-12'>
            <div className='mb-8'>
                <h2 className='text-5xl font-bold'>Testimoial</h2>
                <p className='text-lg mt-2'>What People Say about Bookshore</p>
            </div>
                <Slider {...testimonialSettings}>
                    {reviews.map(review => <TestimonialCard key={review.id} review={review} />)}
                </Slider>
            <div className='mt-24 text-center'>
                <h2 className='text-xl font-bold'>Want to Say Something about Bookshore?</h2>
                <label htmlFor="testimonial-modal" className="btn btn-sm pb-6 pt-3 w-40 btn-outline btn-accent text-white mt-4 rounded-full">Write a Review</label>
                <TestimonialModal />
            </div>
        </div>
    )
}

export default Testimonial