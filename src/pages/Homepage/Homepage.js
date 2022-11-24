import React from 'react'
import useTitle from '../../hooks/useTitle'
import MidBanner from './components/MidBanner'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
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
                <Testimonial/>
            </div>
        </>

    )
}

export default Homepage