import React from 'react'
import useTitle from '../../hooks/useTitle'
import HomeBanner from './components/HomeBanner'

const Homepage = () => {
    useTitle('Home')
    return (
        <div>Homepage
            <HomeBanner />
        </div>
    )
}

export default Homepage