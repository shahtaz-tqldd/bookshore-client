import React from 'react'
import book1 from '../../../assets/images/book1.png'
import book2 from '../../../assets/images/book2.png'

const Services = () => {
    return (
        <>
            <h1 className='mt-16 mb-12 text-center text-5xl'>Services</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-full md:w-1/2 lg:w-2/5 mx-4">
                        <div className="card bg-base-100 hover:shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={book1} alt="books" className="w-4/5 rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Buy Old Books</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/5 mx-4">
                        <div className="card bg-base-100 hover:shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={book2} alt="books" className="w-4/5 rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Sell your old books</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Sell Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services