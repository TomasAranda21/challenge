import React from 'react'
import Icons, { icons } from '../icons/Icons'

const ButtonWhite = ({icon, text}) => {
  return (
    <button className="border p-2 sm:px-3  rounded-lg bg-white flex items-center gap-2 hover:bg-gray-50 duration-100 border-gray-300">
        {icon && <Icons icon_type={icon} className="text-xl"/>}
        {text}
    </button>
  )
}

export default ButtonWhite