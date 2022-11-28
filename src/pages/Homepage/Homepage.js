import { useQuery } from '@tanstack/react-query'
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
    const {data : adsItems =[] } = useQuery({
        queryKey: ["advertised"],
        queryFn: async()=>{
            const res = await fetch('https://bookshore-server.vercel.app/products/advertised',{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    return (
        <>
            <div className='max-w-[1200px] mx-auto'>
                <TopBanner />
                <Services/>
            </div>
            <MidBanner/>
            <div className='max-w-[1200px] mx-auto px-6'>
                <CategoriesHome/>
                {adsItems.length>0 && <Advertisement adsItems={adsItems}/>}
                <Testimonial/>
            </div>
        </>

    )
}

export default Homepage