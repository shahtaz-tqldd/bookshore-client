import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ProductCard from '../../Categories/components/Products/ProductCard'

const Products = () => {
    // const [product, setProduct] = useState(null)
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
        <div className='grid grid-cols-2 gap-8'>
            {products?.slice(0,4).map(product => <ProductCard product={product} />)}
        </div>
    )
}

export default Products
