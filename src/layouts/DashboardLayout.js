import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

import useAdmin from '../hooks/useAdmin'
import useSeller from '../hooks/useSeller'

import { AuthContext } from '../context/AuthProvider'

const DashboardLayout = () => {
  const { user } = useContext(AuthContext)
  const [isAdmin] = useAdmin(user.email)
  const [isSeller] = useSeller(user.email)

  const dashboardMenu = <>
    {isAdmin && <li><Link to='/dashboard/all-users'>All Users</Link></li>}
    {isAdmin && <li><Link to='/dashboard/all-products'>All Products</Link></li>}
    {(isSeller || isAdmin) && <li><Link to='/dashboard/seller-products'>My Products</Link></li>}
    <li><Link to='/dashboard/booked-products'>My Orders</Link></li>
    {isSeller && <li><Link to='/sell-books'>Add a Product</Link></li>}
  </>
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-8 lg:ml-12 ml-4">
          <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Outlet />
        </div>
        <div className="drawer-side z-0">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {dashboardMenu}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout
