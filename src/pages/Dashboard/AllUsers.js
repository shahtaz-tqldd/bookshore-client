import { useQuery } from '@tanstack/react-query'
import { GoVerified } from 'react-icons/go'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import DeleteUserModal from './components/DeleteUserModal'
import ConfirmModal from './components/ConfirmModal'

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null)
    const [makeAdmin, setMakeAdmin] = useState(null)
    const [verifyUser, setVerifyUser] = useState(null)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data
        }
    })
    // delete user
    const handleDelete = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("User Deleted Successfully")
                    setDeletingUser(null)
                    refetch()
                }
            })
    }
    // make a user admin
    const handleMakeAdmin = (id) => {
        const url = `http://localhost:5000/users/admin/${id}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("User made Admin successfully")
                    setMakeAdmin(null)
                    refetch()
                }
            })
    }
    // verify user
    const handleVerifyUser = (id) => {
        const url = `http://localhost:5000/users/verify/${id}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("User verified successfully")
                    setVerifyUser(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl font-bold uppercase mb-6'>All Users</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-3/4">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Info</th>
                            <th>User Type</th>
                            <th>User Role</th>
                            <th>Verify</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user.photoURL} alt={user.displayName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user.displayName}</div>
                                                    <div className="text-sm opacity-50">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{user.userType}</td>
                                        <td>
                                            {user?.role === 'admin' ? 'Admin' : <label htmlFor="confirm-modal" onClick={() => setMakeAdmin(user)} className="btn btn-primary btn-outline btn-sm text-white">Make Admin</label>}
                                        </td>
                                        <td>
                                            {user?.verified === 'verified' ? <span className='flex items-center text-accent'>Verified &nbsp; <GoVerified /></span>
                                                : <label htmlFor="confirm-modal" onClick={() => setVerifyUser(user)} className="btn btn-accent btn-sm text-white">Verify</label>}

                                        </td>
                                        <th>
                                            <label htmlFor="delete-modal" onClick={() => setDeletingUser(user)} className="btn btn-error btn-sm text-white">Delete</label>
                                        </th>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                {
                    deletingUser &&
                    <DeleteUserModal
                        deletingUser={deletingUser}
                        handleDelete={handleDelete}
                    />
                }
                {
                    makeAdmin &&
                    <ConfirmModal
                        userData={makeAdmin}
                        setUserData={setMakeAdmin}
                        message={'Are you sure you want to make Admin'}
                        handleClick={handleMakeAdmin}
                    />
                }
                {
                    verifyUser &&
                    <ConfirmModal
                        userData={verifyUser}
                        setUserData={setVerifyUser}
                        message={'Are you sure you want to verify'}
                        handleClick={handleVerifyUser}
                    />
                }
            </div>

        </div>
    )
}

export default AllUsers