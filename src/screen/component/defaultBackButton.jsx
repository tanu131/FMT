import React from 'react'

const DefaultBackButton = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button 
    type={type} 
    onClick={onClick} 
    className={`${className}`} 
  >
    {label}
  </button>
  )
}

export default DefaultBackButton;
