import React from 'react'
import books from '../../assets/images/books.png'

const SellBooks = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='mt-12 text-4xl font-bold'>Sell Books</h1>
            <p className='mt-2 text-lg'>Sell Books to other that you don't need anymore</p>
            <div className="hero mt-4">
                <div className="hero-content flex-col lg:flex-row w-full">
                    <div className="lg:w-1/2 text-center flex flex-col items-left lg:text-left">
                        <img src={books} alt="books" className='w-2/3' />
                    </div>
                    <div className="lg:w-1/2 card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-xl font-bold">Your Book Details</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Book's Name</span>
                                </label>
                                <input type="text" placeholder="Book's Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Asking Price</span>
                                </label>
                                <input type="text" placeholder="100 taka" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary text-white">Submit</button>
                            </div>
                          
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellBooks