import React from 'react'
import { Link } from 'react-router-dom'

import book1 from '../../../assets/images/book1.webp'
import book2 from '../../../assets/images/book2.webp'

const Services = () => {
  return (
    <section>
      <h1 className='lg:text-[80px] md:text-5xl text-3xl text-center font-bold mb-20 text-[#E96479] max-w-[800px] mx-auto'>explore<br /> <small><small>your convenient options</small></small></h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full md:w-1/2 lg:w-2/5 mx-4">
            <div className="card bg-[#C4DFDF] hover:shadow-xl lg:py-6 transition duration-300">
              <figure className="px-10 pt-10">
                <img src={book1} alt="books" className="w-4/5" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-4xl font-bold mb-6">Buy old books</h2>
                <p>Maybe you haven't found the right book yet. How about you give a try to find a gem in old books alley?</p>
                <div className="card-actions mt-10">
                  <Link to='/categories'><button className="btn btn-primary text-base-100 w-40 normal-case">Buy Books</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/5 mx-4">
            <div className="card bg-[#A0D8B3] hover:shadow-xl lg:py-6 transition duration-300">
              <figure className="px-10 pt-10">
                <img src={book2} alt="books" className="w-4/5" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-4xl font-bold mb-6">Sell old books</h2>
                <p>Sell your used and old books to other. Share the enrichment of knowledge with your fellow bookworm. </p>
                <div className="card-actions mt-10">
                  <Link to='/sell-books'><button className="btn btn-primary text-base-100 w-40 normal-case">Sell Books</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services