import React from 'react'
import Icons, { icons } from '../icons/Icons'

const ArrowButton = ({text, type, onClick}) => {
  return (
    <div className="flex items-center gap-1">
        <p>{text}</p>

        <button onClick={onClick}>
            {type ? <Icons icon_type={icons.arrowUpIcon} className="font-bold text-black" /> : <Icons icon_type={icons.arrowDownIcon} className="font-bold text-black" />}
            
        </button>
    </div>
  )
}

export default ArrowButton