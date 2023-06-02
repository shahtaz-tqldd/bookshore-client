import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../../context/AuthProvider'
import ProductActionModal from './components/ProductActionModal'

const SellerProducts = () => {
    const [removeProduct, setRemoveProduct] = useState(null)
    const [advertiseProduct, setAdvertiseProduct] = useState(null)

    const { user } = useContext(AuthContext)
    const { data: products = [], refetch } = useQuery({
        queryKey: ["products", user?.email],
        queryFn: async () => {
            const res = await fetch(`https://bookshore-server.vercel.app/my-products?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    // remove product 
    const handleRemoveProduct = (product) => {
        fetch(`https://bookshore-server.vercel.app/products/remove/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Product successfully removed")
                    setRemoveProduct(null)
                    refetch()
                }
            })
    }

    // advertise product
    const handleAdvertiseProduct = (productInfo) => {
        fetch('https://bookshore-server.vercel.app/products/advertised', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // advertiseStatusToDB(productInfo._id)
                    
                    setAdvertiseProduct(null)
                    toast.success("success")
                    refetch()
                }
            })
    }

    // change advertisement status to db
    // need to solve----------
    const advertiseStatusToDB = (id) => {
        fetch(`https://bookshore-server.vercel.app/products/advertise/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Advertised successfull")
                    setAdvertiseProduct(null)
                    refetch()
                }
            })
    }
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
                        {products.length &&
                            products.map((product, index) => {
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
                                        <td>{product?.status === 'sold' ? <span className='text-primary font-bold'>SOLD</span> : 'Unsold'}</td>
                                        <th>
                                            <label htmlFor='productAction-modal' onClick={() => setRemoveProduct(product)} className="btn btn-error text-white btn-sm">Remove</label>
                                        </th>
                                        <th>
                                            {(product?.status === 'unsold' && product?.advertised !== 'advertised') &&
                                                <label htmlFor='productAction-modal' onClick={() => setAdvertiseProduct(product)} className="btn btn-outline btn-accent btn-sm">Advertise</label>}
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    removeProduct &&
                    <ProductActionModal
                        productData={removeProduct}
                        setProductData={setRemoveProduct}
                        message={'Are you sure that you want to remove'}
                        handleClick={handleRemoveProduct}
                        btnColor={'btn-error'}
                        action={'Remove'}
                    />
                }
                {
                    advertiseProduct &&
                    <ProductActionModal
                        productData={advertiseProduct}
                        setProductData={setAdvertiseProduct}
                        message={'Are you sure you want to Advertise'}
                        handleClick={handleAdvertiseProduct}
                        btnColor={'btn-accent'}
                        action={'Confirm'}
                    />
                }
            </div>
        </div>
    )
}

export default SellerProducts