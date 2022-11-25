import React, { useContext } from 'react'
import Slider from 'react-slick';
import CategoryCard from '../../Categories/components/CategoryCard'
import { categorySettings } from '../../../tools/Slider'
import { AuthContext } from '../../../context/AuthProvider'

const CategoriesHome = () => {
    const {categories} = useContext(AuthContext)
    return (
        <>
        <h1 className='mt-16 mb-12 text-center font-bold text-5xl'>Categories</h1>
            <Slider {...categorySettings}>
                {
                    categories.map(category => <CategoryCard key={category.id} details={category} />)
                }
            </Slider>
        </>
    )
}

export default CategoriesHome