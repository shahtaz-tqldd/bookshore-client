import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider'
import header from '../../../assets/images/header.webp'

const Hero = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className='mt-8 h-[500px] rounded-2xl relative mx-4' style={{ backgroundImage: `url(${header})`, backgroundSize: 'cover' }}>
      <div className='lg:w-[540px] md:w-1/2 w-full absolute top-[20%] lg:left-20 md:left-12 left-4'>
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-white font-bold"><span className='text-warning'>Sell Old Books</span> of your Collection and <span className='text-warning'>Buy Old Books</span> from others in Bookshore</h1>
        <p className="mt-6 text-white lg:text-lg md:text-md text-sm lg:w-[450px] w-[300px]">You may find lot of books in your nearby area to purchase at a lower price.</p>
        {!user?.uid && <Link to='/register'><button className="btn btn-secondary normal-case w-40 mt-12">Get Started</button></Link>}
      </div>
    </div>
  )
}

export default Hero
