import React from 'react'

const MakeAdminModal = ({ makeAdmin, handleMakeAdmin }) => {
    return (
        <div>
            <input type="checkbox" id="makeAdmin-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg text-center">Are you sure you want to Make Admin <br /><span className='text-xl font-bold'>{makeAdmin.displayName}</span> ? </h3>

                    <div className="modal-action">
                        <label htmlFor="makeAdmin-modal" className="btn btn-outline btn-sm">Cancel</label>
                        <button onClick={() => handleMakeAdmin(makeAdmin._id)} className='btn btn-primary btn-sm text-white'>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAdminModal