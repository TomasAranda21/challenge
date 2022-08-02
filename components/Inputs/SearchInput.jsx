import React from 'react'
import Icons, {icons} from '../icons/Icons'

const SearchInput = ({text}) => {
  return (
    <div className="flex gap-2 items-center p-1.5 bg-white px-3 border rounded-lg shadow-sm border-gray-300">

        <Icons icon_type={icons.searchIcon} className="text-xl text-gray-500"/>

        <input type="text" 
        placeholder={text} 
        className="focus:border-none outline-0 w-full"/>

    </div>
  )
}

export default SearchInput