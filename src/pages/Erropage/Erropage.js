import React from 'react'
import { Link } from 'react-router-dom';
import pageNotFond from '../../assets/images/error.webp';
import useTitle from '../../hooks/useTitle';

const Erropage = () => {
  useTitle('Error')
  return (
    <div className='text-center flex justify-center pt-16 pb-40'>
      <div>
        <img src={pageNotFond} className="w-64" alt="page not found" />
        <p className='text-6xl font-bold'>404</p>
        <p className='text-3xl'>Page not Found!</p>
        <p className='mt-8'>Go Back to <Link to='/' className="text-primary">Homepage</Link></p>
      </div>
    </div>
  )
}

export default Erropage;