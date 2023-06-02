import React, { useState, useEffect, useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import ProductCard from './ProductCard';
import axios from 'axios';
import { AuthContext } from '../../context/AuthProvider';

const Products = () => {
  const [products, setProducts] = useState(null);
  const { categories, category, setCategory } = useContext(AuthContext)
  useTitle('Product');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://bookshore-server.vercel.app/products?category=${category}`;
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <section className='max-w-[1200px] mx-auto'>
      <div className='flex justify-center'>
        <div class="tabs tabs-boxed bg-base-100 mt-10 border-2 border-[#bbb]">
          <button onClick={() => setCategory('')} className={`tab ${category === '' && 'tab-active'}`}>
            All
          </button>
          {categories.map(({ categoryName }, index) => (
            <button
              key={index}
              onClick={() => setCategory(categoryName)}
              className={`tab ${category === categoryName && 'tab-active'}`}
            >
              {categoryName}
            </button>

          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16'>
        {
          products && products.map(product => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Products;
