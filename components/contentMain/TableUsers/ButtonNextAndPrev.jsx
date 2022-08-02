import React from 'react'
import ButtonWhite from '../../buttons/ButtonWhite'

const ButtonNextAndPrev = () => {
  return (
    <div className="flex justify-between flex-col gap-2 sm:flex-row sm:gap-0 sm:px-9 py-2 sm:py-4 items-center font-medium">
        <p className="font-normal text-sm">Page{' '}<span className="font-medium">1</span>{' '}of{' '}<span className="font-medium">10</span></p>

        <div className="flex gap-20 sm:gap-3">

        <ButtonWhite text="Previous"/>
        <ButtonWhite text="Next"/>

        </div>
    </div>
  )
}

export default ButtonNextAndPrev