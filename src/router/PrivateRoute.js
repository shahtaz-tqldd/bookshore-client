import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    
    if (loading) {
        return (
            <div className='flex my-64'>
                <button className="btn bg-base-200 border-none font-normal normal-case text-5xl text-error loading mx-auto">Loading...</button>
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />

}

export default PrivateRoute