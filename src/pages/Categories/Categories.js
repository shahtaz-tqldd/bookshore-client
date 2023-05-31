import React, { useContext } from 'react'
import CategoryCard from './components/CategoryCard'
import { AuthContext } from '../../context/AuthProvider'

const Categories = () => {
    const {categories} = useContext(AuthContext)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='mt-12 text-4xl font-bold ml-4'>Buy Books</h1>
            <p className='mt-2 ml-4 text-lg'>from your favourite collection</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1 mt-8 mb-24'>
                {categories.map(category => <CategoryCard key={category.id} details={category} />)}
            </div>
        </div>

    )
}

export default Categories