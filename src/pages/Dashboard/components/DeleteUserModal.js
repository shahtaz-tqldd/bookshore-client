import React from 'react'

const DeleteUserModal = ({ deletingUser, handleDelete }) => {
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg text-center">Are you sure you want to delete <br /><span className='text-xl font-bold'>{deletingUser.displayName}</span> ? </h3>

                    <div className="modal-action">
                        <label htmlFor="delete-modal" className="btn btn-outline btn-sm">Cancel</label>
                        <button onClick={() => handleDelete(deletingUser)} className='btn btn-error btn-sm text-white'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteUserModal