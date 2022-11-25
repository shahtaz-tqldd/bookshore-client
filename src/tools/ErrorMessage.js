import React from 'react'
import {AiFillWarning} from 'react-icons/ai';

const ErrorMessage = ({ children }) => {
    return (
        <span className='text-error text-sm mt-2 flex items-center'><AiFillWarning /> &nbsp;{children}</span>
    )
}

export default ErrorMessage