import React from 'react'

const CustomButton = ({children}) => {
  return (
    <button className='btn py-3 px-8 bg-accent'>
        {children}
    </button>
  )
}

export default CustomButton