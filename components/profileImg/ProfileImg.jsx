import Image from 'next/image'
import React from 'react'

const ProfileImg = ({ img, name, email}) => {

  return (

    <div className="flex gap-2 items-center md:text-sm text-xs">
         <div className="h-9 w-9 relative overflow-hidden rounded-full">
              <Image src={`/users/user${img}.png`} alt="" className=" absolute h-9 object-cover" width="36px" height="36px"/>
          </div>

          <div className="flex flex-col gap-0">
              <p className="font-semibold text-black">{name}</p>
              <p >{email}</p>
          </div>
    </div>


 

  )
}

export default ProfileImg