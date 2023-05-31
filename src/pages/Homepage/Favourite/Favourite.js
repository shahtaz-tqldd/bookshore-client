import React, { useContext } from 'react'
import CategoryCard from '../../Categories/components/CategoryCard'
import { AuthContext } from '../../../context/AuthProvider'

const Favourite = () => {
    const { categories } = useContext(AuthContext)
    return (
        <section className='my-40'>
            <h1 className='lg:text-[80px] md:text-5xl text-3xl text-center font-bold mb-20 text-[#E96479] max-w-[800px] mx-auto'>choose<br /> <small><small> from your favourite</small></small></h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    categories.map(category => <CategoryCard key={category.id} details={category} />)
                }
            </div>
        </section>
    )
}

export default Favourite