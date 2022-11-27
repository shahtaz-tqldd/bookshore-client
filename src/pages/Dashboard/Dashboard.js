import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import useAdmin from '../../hooks/useAdmin'
import useSeller from '../../hooks/useSeller'
import openBook from '../../assets/images/openbook.png';

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const { displayName, email, photoURL } = user
  const [isAdmin] = useAdmin(email)
  const [isSeller] = useSeller(email)
  return (
    <div className=''>
      <div className='flex items-center mb-8'>
        <img src={openBook} alt="open book" className='w-32 mr-4' />
        <div>
          <h2 className='text-2xl'>Welcome to</h2>
          <h2 className='text-4xl '>Bookshore</h2>
        </div>
      </div>
      <div className='flex p-8 items-center bg-neutral lg:w-1/2 rounded-xl'>
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={photoURL} alt={displayName} />
          </div>
        </div>
        <div className='ml-6'>
          <div className='text-4xl font-bold text-primary'>{displayName}</div>
          <div className='text-lg text-ghost'>{email}</div>
          <div className='text-2xl text-accent mt-2'>{(isAdmin && 'Admin') || (isSeller && 'Seller') || 'Buyer'}</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard