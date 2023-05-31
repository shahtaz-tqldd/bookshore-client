import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useTitle from '../../hooks/useTitle'
import Services from './Services/Services'
import Testimonial from './Testimonial/Testimonial'
import Hero from './Hero/Hero'
import Products from './Products/Products'
import About from './About/About'
import Favourite from './Favourite/Favourite'
import Advertisement from './Ads/Advertisement'
import Features from './Features/Features'

const Homepage = () => {
  useTitle('Home')
  const { data: adsItems = [] } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch('https://bookshore-server-shahtaz-tqldd.vercel.app/products/advertised')
      const data = await res.json()
      return data
    }
  })
  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <Hero />
        <Features />
        <Services />
      </div>
      <About />
      <div className='max-w-[1200px] mx-auto px-6'>
        <Products />
        <Favourite />
        {adsItems.length > 0 && <Advertisement adsItems={adsItems} />}
        <Testimonial />
      </div>
    </>

  )
}

export default Homepage
