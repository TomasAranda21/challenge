import React from 'react'
import ButtonWhite from '../../buttons/ButtonWhite'
import { icons } from '../../icons/Icons'
import SearchInput from '../../Inputs/SearchInput'

const SearchAndDate = () => {
  return (

    <div className="flex items-center justify-between flex-col gap-4 lg:gap-0 lg:flex-row font-medium">

        <SearchInput text="Search for Services"/>

        <div className="flex gap-3 items-center flex-col sm:flex-row">

            <ButtonWhite icon = {icons.dateIcon} text="Jan 6, 2022 - Jan 13, 2022"/>

            <ButtonWhite icon = {icons.filterIcon} text="Filters"/>
        </div>

        
    </div>

  )
}

export default SearchAndDate