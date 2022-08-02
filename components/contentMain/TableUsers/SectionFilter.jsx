import React from 'react'
import ButtonTable from '../../buttons/ButtonTable'
import Icons, { icons } from '../../icons/Icons'
import SelectTable from '../../Inputs/SelectTable'

const SectionFilter = ({value, onChange, onClick}) => {
  return (
    <div className="p-5 flex justify-center items-center lg:justify-between flex-col gap-4 sm:gap-0 lg:flex-row ">
        <h3 className="sm:text-xl font-medium">Hired Projects</h3>


        <div className="flex gap-1 sm:gap-3 items-center md:text-sm text-xs">
            <div className=" border rounded-lg flex-col gap-2 sm:gap-0 sm:flex-row flex p-2 sm:p-0 border-gray-300">
                <ButtonTable onClick={onClick} text="Clear Filters"/>

                    <SelectTable value={value} onChange={onChange}/> 

                <ButtonTable text="Project: All"/>

            </div>

            <Icons icon_type={icons.dotsIcon} className="text-lg sm:text-xl text-gray-400"/>
        </div>
    </div>
  )
}

export default SectionFilter