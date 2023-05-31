import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { AuthContext } from '../context/AuthProvider'
import useAdmin from '../hooks/useAdmin'

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user.email)
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <Loader />
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace />
}

export default AdminRoute