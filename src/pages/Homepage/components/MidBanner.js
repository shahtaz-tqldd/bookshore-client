import React from 'react'
import bookreading from '../../../assets/images/bookreading.png'

const MidBanner = () => {
    return (
        <div className="hero bg-secondary my-16 py-8">
            <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                <div>
                    <h1 className="text-3xl font-bold mb-8">What You Can Do</h1>
                    <p className="py-2">Sell your Old Book</p>
                    <p className="py-2">Buy Old Books from other</p>
                    <p className="py-2">After reading a book sell it to other</p>
                </div>
                <div className="w-1/2">
                    <img src={bookreading} alt="a book" />
                </div>
            </div>
        </div>
    )
}

export default MidBanner