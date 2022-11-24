import React from 'react'
import CategoryCard from './components/CategoryCard'
import book1 from '../../assets/icons/book1.png'
import book2 from '../../assets/icons/book2.png'
import book3 from '../../assets/icons/book3.png'
import book4 from '../../assets/icons/book6.png'
import book5 from '../../assets/icons/book5.png'

const Categories = () => {
    const categories = [
        {
            "id":1,
            "categoryName": "Novel",
            "detail": "Find this books of category in here",
            "img": book1
        },
        {
            "id":2,
            "categoryName": "Poetry",
            "detail": "Find this books of category in here",
            "img": book2
        },
        {
            "id":3,
            "categoryName": "Non Fiction",
            "detail": "Find this books of category in here",
            "img": book3
        },
        {
            "id":4,
            "categoryName": "Academic",
            "detail": "Find this books of category in here",
            "img": book4
        },
        {
            "id":5,
            "categoryName": "Research and Journal",
            "detail": "Find this books of category in here",
            "img": book5
        }
    ]
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='mt-12 text-4xl font-bold'>Buy Books</h1>
            <p className='mt-2 text-lg'>from your favourite collection</p>
            <div className='grid lg:grid-cols-3 my-16'>
                {categories.map(category => <CategoryCard key={category.id} details={category} />)}
            </div>
        </div>

    )
}

export default Categories