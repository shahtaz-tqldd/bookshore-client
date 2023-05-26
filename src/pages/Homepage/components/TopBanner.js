import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import book1 from '../../../assets/images/book1.webp'
import book2 from '../../../assets/images/book2.webp'
import book3 from '../../../assets/images/book3.webp'
import { AuthContext } from '../../../context/AuthProvider'
import Slider from 'react-slick'
import { homeBannerSettings } from '../../../tools/Slider'

const TopBanner = () => {
  const { user } = useContext(AuthContext)
  const bannerData = [
    {
      title: "",
      details: "You may find lot of books in your nearby area to purchase at a lower price.",
      image: book1
    },
    {
      title: "",
      details: "You may find lot of books in your nearby area to purchase at a lower price.",
      image: book2
    },
    {
      title: "",
      details: "You may find lot of books in your nearby area to purchase at a lower price.",
      image: book3
    },
  ]
  return (
    <Slider {...homeBannerSettings}>
      {
        bannerData.map(({title, details, image}) => (
          <div className="hero mt-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="lg:w-2/5 md:w-1/2 w-full">
                <img src={image} alt="a book" className='w-4/5 mx-auto' />
              </div>
              <div className='lg:w-2/5 md:w-1/2 w-full'>
                <h1 className="text-3xl font-bold"><span className='text-accent'>Sell Old Books</span> of your Collection and <span className='text-accent'>Buy Old Books</span> from others in Bookshore</h1>
                <p className="py-6">{details}</p>
                {!user?.uid && <Link to='/register'><button className="btn btn-primary text-white w-40">Get Started</button></Link>}
              </div>
            </div>
          </div>
        ))
      }
    </Slider>
  )
}

export default TopBanner