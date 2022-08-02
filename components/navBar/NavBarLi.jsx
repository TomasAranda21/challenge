import React from 'react'
import Icons from '../icons/Icons'


const NavBarLi = ({icon, text}) => {
  return (
    <li>
        <a href="#" className="font-medium capitalize flex items-center gap-4 text-base lg:text-lg text-gray-700">
          <Icons icon_type={icon} className="text-2xl "/>
          {text}
        </a>
    </li>
  )
}

export default NavBarLi