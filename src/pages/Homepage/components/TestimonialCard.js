import React from 'react'

const TestimonialCard = ({ review }) => {
    const { name, comment, rating, propic } = review
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="p-6">
                <p>{comment}</p>
            
            <div className='flex mt-6'>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={propic} alt={name} />
                    </div>
                </div>
                <div className='ml-4'>
                    <h3 className='text-lg font-bold'>{name}</h3>
                    <div className="rating rating-sm flex items-center">
                        <span>{rating} &nbsp;</span>
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TestimonialCard