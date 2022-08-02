import React from 'react'

const ButtonTable = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="sm:p-2 sm:px-3 hover:bg-gray-50 duration-100 font-semibold">{text}</button>
  )
}

export default ButtonTable