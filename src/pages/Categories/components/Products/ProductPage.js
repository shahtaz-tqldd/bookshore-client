import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthProvider'
import useTitle from '../../../../hooks/useTitle'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

const ProductPage = () => {
    const { user } = useContext(AuthContext)
    useTitle('Product')
    const data = useLoaderData()
    const name = data.params.name

    const [product, setProduct] = useState(null)
    const url = `https://bookshore-server.vercel.app/products?category=${name}`
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='max-w-[1200px] mx-auto px-4 md:px-6'>
            <h1 className='mt-12 text-4xl font-bold'>{name}</h1>
            <p className='mt-2 text-lg'>Read more and enrich your knowledge</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-16'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    ></ProductCard>)
                }
            </div>
            {
                product && <ProductModal
                    product={product}
                    setProduct={setProduct}
                    user={user || ''}
                />
            }

        </div >
    )
}

export default ProductPage