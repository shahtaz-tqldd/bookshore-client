import React, { useState } from 'react'
import useTitle from '../../../../hooks/useTitle'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

const ProductPage = () => {
    useTitle('Product')
    const [product, setProduct] = useState(null)
    const products = [
        {
            "id": 1,
            "productName": "The Adventure of Hucklebary Finn",
            "location": "Dhaka, Bangladesh",
            "resalePrice": 100,
            "originalPrice": 250,
            "picture": "https://149645218.v2.pressablecdn.com/wp-content/uploads/2018/02/huckleberry-finn.jpg",
            "used": "4 months",
            "sellerName": "Hey Man"
        },
        {
            "id": 2,
            "productName": "Harry Potter",
            "location": "Kushtia, Bangladesh",
            "resalePrice": 120,
            "originalPrice": 270,
            "picture": "https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg",
            "used": "3 months",
            "sellerName": "Bye Man"
        },
        {
            "id": 3,
            "productName": "A million to One",
            "location": "Kushtia, Bangladesh",
            "resalePrice": 120,
            "originalPrice": 270,
            "picture": "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg",
            "used": "3 months",
            "sellerName": "Bye Man"
        },

    ]
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='mt-12 text-4xl font-bold'>Novel</h1>
            <p className='mt-2 text-lg'>Read more novel and enrich your literature</p>
            <div className='flex mt-12 mb-24'>
                <div className='lg:w-3/4'>
                    <div className='grid grid-cols-2 gap-4'>
                        {
                            products.map(product => <ProductCard
                                key={product.id}
                                product={product}
                                setProduct={setProduct}
                            ></ProductCard>)
                        }
                    </div>
                </div>

                <div className='lg:w-1/4 pl-6'>
                    <div className="btn-group bg-base-100 btn-group-vertical flex">
                        <h2 className='my-4 text-lg font-bold px-3'>Browse More Collection</h2>
                        <button className="btn btn-active">Novel</button>
                        <button className="btn">Poetry</button>
                        <button className="btn">Non Fiction</button>
                        <button className="btn">Academic</button>
                        <button className="btn">Journal and Research</button>
                    </div>
                </div>
            </div>
            {
                product && <ProductModal
                    product={product}
                    setProduct={setProduct}
                />
            }

        </div>
    )
}

export default ProductPage