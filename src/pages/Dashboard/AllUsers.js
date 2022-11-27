import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import DeleteUserModal from './components/DeleteUserModal'
import MakeAdminModal from './components/MakeAdminModal'

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null)
    const [makeAdmin, setMakeAdmin] = useState(null)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data
        }
    })
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

    const handleMakeAdmin = (id) => {
        const url = `http://localhost:5000/users/admin/${id}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success("User made Admin successfully")
                    setMakeAdmin(null)
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
                                            {user?.role === 'admin' ? 'Admin' : <label htmlFor="makeAdmin-modal" onClick={() => setMakeAdmin(user)} className="btn btn-primary btn-outline btn-sm text-white">Make Admin</label>}
                                        </td>
                                        <td>
                                            <label htmlFor="verify-modal" className="btn btn-accent btn-sm text-white">Verify</label>
                                            {/* {user?.role === 'admin' ? 'Admin' : <label htmlFor="makeAdmin-modal" onClick={() => setMakeAdmin(user)} className="btn btn-accent btn-sm text-white">Make Admin</label>} */}
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
                    <MakeAdminModal
                        makeAdmin={makeAdmin}
                        handleMakeAdmin={handleMakeAdmin}
                    />
                }
            </div>

        </div>
    )
}

export default AllUsers