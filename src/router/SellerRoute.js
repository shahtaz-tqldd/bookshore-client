import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import Loader from '../components/Loader/Loader'
import useSeller from '../hooks/useSeller'

import { AuthContext } from '../context/AuthProvider'

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation()
    if (loading || isSellerLoading) {
        return <Loader />
    }
    if (user && isSeller) {
        return children
    }
    return <Navigate to='/register' state={{ from: location }} replace />
}

export default SellerRoute
