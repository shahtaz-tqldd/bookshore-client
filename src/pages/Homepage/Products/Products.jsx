import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ProductCard from '../../Categories/components/Products/ProductCard'

const Products = () => {
	const url = `https://bookshore-server-shahtaz-tqldd.vercel.app/products/`
	const { data: products = [] } = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await fetch(url)
			const data = await res.json()
			return data;
		}
	})
	return (
		<section>
			<h1 className='lg:text-[80px] md:text-5xl text-3xl text-center font-bold mb-20 text-[#E96479] max-w-[800px] mx-auto'>buy<br /><small><small> your desire books</small></small></h1>
			<div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8'>
				{products?.slice(0, 4).map(product => <ProductCard product={product} />)}
			</div>
		</section>
	)
}

export default Products
