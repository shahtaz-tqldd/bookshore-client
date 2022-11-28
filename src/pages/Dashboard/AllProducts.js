import { useQuery } from '@tanstack/react-query'
import React from 'react'

const AllProducts = () => {
    const { data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <h2 className='text-3xl font-bold uppercase mb-6'>All Products</h2>
            <div className="overflow-x-auto w-full pr-12">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book's Name</th>
                            <th>Price</th>
                            <th>Seller</th>
                            <th>Status</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => {
                                return (
                                    <tr key={product._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="rounded w-12 h-16">
                                                        <img src={product.imgProduct} alt={product.productName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{product.productName}</div>
                                                    <div className="text-sm opacity-50">{product.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='text-lg'><strong>{product.resalePrice} taka</strong></div>
                                            <small>Original Price: {product.originalPrice} taka</small>
                                        </td>
                                        <td>
                                            <div>{product.sellerName}</div>
                                            <small>{product.location}</small>
                                        </td>
                                        <td>{product?.status === 'sold' ? <span className='text-primary font-bold'>SOLD</span> : 'Unsold'}</td>
                                        <th>
                                            <button className="btn btn-error text-white btn-sm">Remove</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllProducts