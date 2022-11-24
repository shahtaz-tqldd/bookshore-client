import React from 'react'
import book from '../../../assets/images/book.png'

const TopBanner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-2/5">
                    <img src={book} alt="a book"  />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Buy and Sell Your Old Book</h1>
                    <p className="py-6">Bookshore is a place where you can sell and buy old books</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default TopBanner