import React from 'react'

const TestimonialCard = ({ review }) => {
    const { name, comment, rating, propic } = review
    
    const n = Math.ceil(rating)
    let rows = []
    for(let i=0; i<n; i++){
        rows.push(1)
    }
    const m = 5-n;
    let rows2 = []
    for(let i=0; i<m; i++){
        rows2.push(1)
    }


    return (
        <div className="rounded-md bg-base-100 mx-3" style={{ backgroundColor: "#CFF5E7" }}>
            <div className="h-64 p-6 flex flex-col justify-between">
                <div>{comment}</div>
                <div className='flex'>
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={propic} alt={name} />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-lg font-bold'>{name}</h3>
                        <div className="rating rating-sm flex items-center">
                            <span>{rating} &nbsp; &nbsp;</span>
                            {
                                rows.map(()=><input type="radio" name="rating-6" className="mask mask-star-2 bg-primary" />)
                            }
                            {
                                rows2.map(()=><input type="radio" name="rating-6" className="mask mask-star-2 bg-base-100" />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard