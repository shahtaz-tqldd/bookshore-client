import React from 'react'
import book from '../../../assets/images/book.png'

const TopBanner = () => {
    return (
        <div className="hero mt-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="lg:w-2/5 md:w-1/2 w-full">
                    <img src={book} alt="a book" className='w-4/5 mx-auto' />
                </div>
                <div className='lg:w-2/5 md:w-1/2 w-full'>
                    <h1 className="text-3xl font-bold"><span className='text-accent'>Sell Old Books</span> of your Collection and <span className='text-accent'>Buy Old Books</span> from others in Bookshore</h1>
                    <p className="py-6">You may find lot of books in your nearby area to purchase at a lower price.</p>
                    <button className="btn btn-primary text-white w-40">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default TopBanner