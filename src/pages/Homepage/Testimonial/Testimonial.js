import React from 'react'
import Slider from 'react-slick'
import { testimonialSettings } from '../../../tools/Slider'
import TestimonialCard from './TestimonialCard'

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
        <div className='my-40'>
            <div className='mb-8'>
                <h1 className='lg:text-[80px] md:text-5xl text-3xl text-center font-bold mb-20 text-[#E96479] max-w-[800px] mx-auto'>people<br /> <small><small> talk about bookshore</small></small></h1>
            </div>
            <Slider {...testimonialSettings}>
                {reviews.map(review => <TestimonialCard key={review.id} review={review} />)}
            </Slider>
        </div>
    )
}

export default Testimonial