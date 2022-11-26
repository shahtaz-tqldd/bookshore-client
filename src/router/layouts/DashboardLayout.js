import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const DashboardLayout = () => {
    const dashboardMenu = <>
        <li><Link to='/dashboard/all-users'>All Users</Link></li>
        <li><Link to='/'>All Buyer</Link></li>
        <li><Link to='/'>All Seller</Link></li>
        <li><Link to='/'>Admin</Link></li>
    </>
    return (
        <div>
            <Navbar/>
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
            <Footer/>
        </div>
    )
}

export default DashboardLayout