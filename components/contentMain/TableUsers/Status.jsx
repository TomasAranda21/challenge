import React, { useEffect, useState } from 'react'
import Icons, { icons } from '../../icons/Icons'

const Status = ({text}) => {
  
  const [color, setColor] = useState('')

  useEffect(() => {

    if(text === 'Done' || text === 'Success'){

      setColor("bg-green-100 text-green-600")

    }else if(text === 'In progress'){
      setColor("bg-yellow-50 text-yellow-600")


    }else if(text === 'Canceled'){
      setColor("bg-red-50 text-red-700")
      
    }else if(text === 'In Progress'){
      setColor("bg-gray-100 text-gray-700")
    }

  }, [])


  return (

    <div className={`${color} "text-center text-xs md:text-sm flex  w-max gap-1 items-center rounded-2xl font-semibold p-1`}>
      <Icons icon_type={icons.circleIcon} />
      <p className="px-1">{text}</p>
    </div>

  )
}

export default Status