import React from 'react'

const ConfirmModal = ({ userData, setUserData, message, handleClick }) => {
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg text-center">{message}<br /><span className='text-xl font-bold'>{userData.displayName}</span> ? </h3>

                    <div className="modal-action">
                        {/* <label htmlFor="confirm-modal" className="btn btn-outline btn-sm">Cancel</label> */}
                        <button onClick={()=> setUserData(null)} className="btn btn-outline btn-sm">Cancel</button>
                        <button onClick={() => handleClick(userData._id)} className='btn btn-primary btn-sm text-white'>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal