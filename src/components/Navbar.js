import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import useSeller from '../hooks/useSeller';

const Navbar = () => {
    const { user, logout, setUser } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)
    const navigate = useNavigate();

    const navMenuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/categories'>Catagories</Link></li>
        { isSeller && <li><Link to='/sell-books'>Sell Books</Link></li> }
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
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
                    <Link to='/' className="text-2xl"><strong>Book</strong>Shore</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navMenuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <button onClick={handleLogOut} className='btn btn-error text-white normal-case'>Logout</button>
                            : <Link to='/login' className="btn btn-outline px-5 normal-case">Sign in</Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar