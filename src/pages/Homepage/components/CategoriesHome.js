import React from 'react'
import book1 from '../../../assets/icons/book1.png'
import book2 from '../../../assets/icons/book2.png'
import book3 from '../../../assets/icons/book3.png'
import book5 from '../../../assets/icons/book5.png'
import book4 from '../../../assets/icons/book4.png'
import Slider from 'react-slick';
import CategoryCard from '../../Categories/components/CategoryCard'
import { categorySettings } from '../../../tools/Slider'

const CategoriesHome = () => {
    const categories = [
        {
            "id": 1,
            "categoryName": "Novel",
            "detail": "Find this books of category in here",
            "img": book1
        },
        {
            "id": 2,
            "categoryName": "Poetry",
            "detail": "Find this books of category in here",
            "img": book2
        },
        {
            "id": 3,
            "categoryName": "Non Fiction",
            "detail": "Find this books of category in here",
            "img": book3
        },
        {
            "id": 4,
            "categoryName": "Academic",
            "detail": "Find this books of category in here",
            "img": book4
        },
        {
            "id": 5,
            "categoryName": "Research and Journal",
            "detail": "Find this books of category in here",
            "img": book5
        }
    ]
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