import React, { useEffect, useState } from 'react'
import SearchInput from '../Inputs/SearchInput'
import NavBarList from './NavBarList'
import Icons, {icons} from '../icons/Icons'

const NavBar = () => {

  const [navMovile, setNavMovile] = useState(false)
  const [widthMovile, setWidthMovile] = useState(false)

  useEffect(() => {

    if(window.screen.width < 1024) setWidthMovile(true)
    else setWidthMovile(false)

  }, [])


  return (

    <div className={`flex flex-col gap-6 overflow-hidden bg-white border-r border-b rounded-b-md h-screen px-3 py-10  lg:py-6 lg:p-6 fixed lg:relative top-0 left-0 z-30
    ${widthMovile ? !navMovile ? "  w-[52px]" : "w-[250px] " : "w-full" }`}>

        
        {widthMovile ? navMovile && 
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl ">Cybertiks</h2> 
              <button onClick={() => setNavMovile(!navMovile)}>
              <Icons icon_type={icons.menuIconRight} className="text-2xl"/>
            </button>
          </div>
        
        : <h2 className="font-bold text-2xl ">Cybertiks</h2>}


        { !navMovile && widthMovile &&
          <button onClick={() => setNavMovile(!navMovile)}>
          <Icons icon_type={icons.menuIconLeft} className="text-2xl "/>
        </button>
        }


        {widthMovile ? navMovile && <SearchInput text="Search"/>: <SearchInput text="Search"/>}

        <NavBarList/>

    </div>

  )
}

export default NavBar