import React from 'react'
import Icons, { icons } from '../icons/Icons'

const Button = ({text}) => {
  return (
    <button className="bg-blue-600 shadow flex items-center gap-2
     hover:bg-blue-700 duration-100 rounded-lg p-2 px-3 text-white text-center font-medium"> 
    <Icons icon_type={icons.plusIcon} className="text-lg font-bold"/>
        
    {text}
    
    </button>
  )
}

export default Button