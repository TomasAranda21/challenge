import React from 'react'
import Icons, {icons} from '../../icons/Icons'


const Cards = ({ammout, text}) => {
  return (

    <div className="bg-white shadow-sm rounded-lg p-3 sm:p-6 sm:py-5  border-2 border-x border-t-0 w-full">
        <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 font-medium">{text}</p>
            <Icons icon_type={icons.dotsIcon} className=" text-xl sm:text-2xl text-gray-400"/>
        </div>

        <div className="flex justify-between items-center py-2">
            <h3 className=" text-2xl sm:text-4xl font-bold">{ammout}</h3>
            
            <div className="flex items-center gap-1 bg-green-100 rounded-2xl text-sm px-2">
                
                <Icons icon_type={icons.arrowUpIcon} className="text-green-600 font-bold"/>    
                <p className="text-green-700 font-medium">100%</p>
                
            </div>
        </div>

    </div>

  )
}

export default Cards