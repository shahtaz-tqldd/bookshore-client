import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import ProductCard from '../../Products/ProductCard'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider'

const Products = () => {
	const {setCategory} = useContext(AuthContext)
	const url = `https://bookshore-server.vercel.app/products/`
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
			<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
				{products?.slice(0, 6).map(product => <ProductCard product={product} />)}
			</div>
			<div className='flex justify-end mt-8'>
				<div className='flex items-center gap-2'>
					<Link onClick={() => setCategory('')} to='/products' className='text-primary hover:text-[#36927c] font-bold text-xl'>See all books</Link>
					<lord-icon
						src="https://cdn.lordicon.com/zmkotitn.json"
						trigger="hover"
						target="div"
						colors="primary:#47A992"
						style={{ width: "50ox", height: "50px" }}>
					</lord-icon>
				</div>
			</div>
		</section>
	)
}

export default Products
