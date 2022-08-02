import React from 'react'

const CheckBox = ({children}) => {
  return (
    <div className="flex gap-3 items-center">

        <input type="checkbox"  
        className="w-5 h-5 cursor-pointer  rounded-md 
         checked:bg-blue-400  checked:ring-blue-600 checked:ring-1 "
        />

        {children}

    </div>
  )
}

export default CheckBox