import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import useSeller from '../../hooks/useSeller';
import logo from '../../assets/icons/logo.png'

const Navbar = () => {
  const { user, logout, setUser, categories } = useContext(AuthContext)
  const [isSeller] = useSeller(user?.email)
  const navigate = useNavigate();
  const { setCategory } = useContext(AuthContext)

  const handleMenuNavigate = (categoryName) => {
    setCategory(categoryName)
    navigate('/products')
  }

  const navMenuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li tabIndex={0}>
      <Link to='/categories'>
        Collections
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      </Link>
      <ul className="p-2 bg-primary z-20">
        {
          categories?.map(({ categoryName }, index) => <li key={index}>
            <span onClick={() => handleMenuNavigate(categoryName)}>
              {categoryName}
            </span>
          </li>)
        }

      </ul>
    </li>
    <li onClick={() => setCategory('')}><Link to='/products'>Books</Link></li>
    {isSeller && <li><Link to='/sell-books'>Sell Books</Link></li>}
    <li><Link to='/blogs'>Blogs</Link></li>
    {user?.uid && <li><Link to='/dashboard'>Dashboard</Link></li>}

  </>

  const handleLogOut = () => {
    logout()
      .then(() => {
        setUser(null)
        toast.success("You are logged out!", {
          style: {
            border: '1px solid #000',
            padding: '16px 20px',
            color: '#e3b50e',
          },
          iconTheme: {
            primary: '#e3b50e',
            secondary: '#FFFAEE',
          },
        })
        navigate('/login')
      })
      .catch(err => console.error(err))
  }
  return (
    <div className='bg-primary sticky top-0 z-10'>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navMenuItems}
            </ul>
          </div>
          <Link to='/' className="text-2xl"><img src={logo} alt="logo" className='h-10 hover:opacity-80' /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white">
            {navMenuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.uid ?
              <button onClick={handleLogOut} className='btn btn-error text-white normal-case rounded-full px-8'>Logout</button>
              : <Link to='/login' className="btn btn-secondary rounded-full px-8 normal-case">Sign in</Link>
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar
