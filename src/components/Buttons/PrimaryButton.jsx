import React from 'react'

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary normal-case px-5 flex items-center gap-1 text-white">
      {children}
      <lord-icon
        src="https://cdn.lordicon.com/zmkotitn.json"
        trigger="hover"
        target="button"
        colors="primary:#fff"
        style={{ width: "20px", height: "20px" }}>
      </lord-icon>
    </button>
  )
}

export default PrimaryButton
