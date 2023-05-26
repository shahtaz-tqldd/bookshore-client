import React, { useContext } from 'react'
import CategoryCard from '../../Categories/components/CategoryCard'
import { AuthContext } from '../../../context/AuthProvider'

const CategoriesHome = () => {
    const { categories } = useContext(AuthContext)
    return (
        <>
            <h1 className='mt-16 mb-12 text-center font-bold text-5xl'>Choose books from your favourite</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    categories.map(category => <CategoryCard key={category.id} details={category} />)
                }
            </div>
        </>
    )
}

export default CategoriesHome