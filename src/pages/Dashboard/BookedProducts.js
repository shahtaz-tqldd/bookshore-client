import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const BookedProducts = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    const { data: orders = [] } = useQuery({
        queryKey: ["orders", email],
        queryFn: async () => {
            const res = await fetch(`https://bookshore-server-shahtaz-tqldd.vercel.app/products/booked?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <h2 className='text-3xl font-bold uppercase mb-6'>My orders</h2>
            <div className="overflow-x-auto w-full pr-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Orders</th>
                            <th>Price</th>
                            <th>Seller</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length &&
                            orders.map((order, index) => {
                                return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="rounded w-12 h-16">
                                                        <img src={order.imgProduct} alt={order.productName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{order.productName}</div>
                                                    <div className="text-sm opacity-50">{order.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='text-lg'><strong>{order.resalePrice} taka</strong></div>
                                            <small>Original Price: {order.originalPrice} taka</small>
                                        </td>
                                        <td>

                                            <div>
                                                <div className="font-bold">{order.sellerName}</div>
                                                <div className="">{order.location}</div>
                                                <div className="text-sm opacity-50">{order.phone}</div>
                                            </div>

                                        </td>
                                        <th>
                                            <button className="btn btn-accent text-white btn-sm">Pay Now</button>
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

export default BookedProducts