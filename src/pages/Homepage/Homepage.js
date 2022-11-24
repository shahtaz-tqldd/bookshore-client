import React from 'react'
import useTitle from '../../hooks/useTitle'
import Advertisement from './components/Advertisement'
import CategoriesHome from './components/CategoriesHome'
import MidBanner from './components/MidBanner'
import Services from './components/Services'
import Testimonial from './components/Testimonial/Testimonial'
import TopBanner from './components/TopBanner'

const Homepage = () => {
    useTitle('Home')
    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <TopBanner />
                <Services/>
            </div>
            <MidBanner/>
            <div className='max-w-[1200px] mx-auto px-6'>
                <CategoriesHome/>
                <Advertisement/>
                <Testimonial/>
            </div>
        </>

    )
}

export default Homepage