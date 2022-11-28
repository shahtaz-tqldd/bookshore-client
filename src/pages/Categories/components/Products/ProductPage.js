import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthProvider'
import useTitle from '../../../../hooks/useTitle'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

const ProductPage = () => {
    const {user} = useContext(AuthContext)
    useTitle('Product')
    const data = useLoaderData()
    const name = data.params.name
    console.log(name)

    const [product, setProduct] = useState(null)
    const url = `https://bookshore-server.vercel.app/products?category=${name}`
    const {data: products =[]} = useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='max-w-[1200px] mx-auto px-4 md:px-6'>
            <h1 className='mt-12 text-4xl font-bold'>{name}</h1>
            <p className='mt-2 text-lg'>Read more and enrich your knowledge</p>
            <div className='flex mt-12 mb-24 lg:flex-row md:flex-col-reverse'>
                <div className='lg:w-4/5 w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        {
                            products.map(product => <ProductCard
                                key={product._id}
                                product={product}
                                setProduct={setProduct}
                            ></ProductCard>)
                        }
                    </div>
                </div>

                <div className='lg:w-1/5 md:w-full md:mb-6 hidden md:block lg:block lg:pl-6'>
                    <div className="btn-group bg-base-100 btn-group-vertical flex lg:flex-col md:flex-row md:justify-between">
                        <h2 className='my-4 text-sm font-bold mx-auto text-accent hidden lg:block'>Browse More Collection</h2>
                        <button className={`btn ${name ==='Novel' && 'btn-active'}`}>Novel</button>
                        <button className={`btn ${name ==='Poetry' && 'btn-active'}`}>Poetry</button>
                        <button className={`btn ${name ==='Non Fiction' && 'btn-active'}`}>Non Fiction</button>
                        <button className={`btn ${name ==='Academic' && 'btn-active'}`}>Academic</button>
                        <button className={`btn ${name ==='Research and Journal' && 'btn-active'}`}>Research and Journal</button>
                    </div>
                </div>
            </div>
            {
                product && <ProductModal
                    product={product}
                    setProduct={setProduct}
                    user = {user}
                />
            }

        </div>
    )
}

export default ProductPage