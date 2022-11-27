import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const SellerProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [] } = useQuery({
        queryKey: ["products", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-products?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <h2 className='text-3xl font-bold uppercase mb-6'>My Products</h2>
            <div className="overflow-x-auto w-full pr-12">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book's Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Remove</th>
                            <th>Advertise</th>
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
                                            <div className='text-lg'>Price: <strong>{product.resalePrice} taka</strong></div>
                                            <small>Original Price: {product.originalPrice} taka</small>
                                        </td>
                                        <td>Unsold</td>
                                        <th>
                                            <button className="btn btn-error text-white btn-sm">Remove</button>
                                        </th>
                                        <th>
                                            <button className="btn btn-accent btn-outline btn-sm">Advertise</button>
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

export default SellerProducts