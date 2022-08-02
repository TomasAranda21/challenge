import React from 'react'
import Cards from './cards/Cards'
import SearchAndDate from './SearchAndDate/SearchAndDate'
import TableUsers from './TableUsers/TableUsers'
import Button from '../buttons/Button'

const ContentMain = () => {
  return (
    <div className="w-full flex flex-col gap-10 pl-16 px-2 pt-10 lg:pt-6 lg:px-6 pb-0">

        <div className="flex justify-between items-center flex-col gap-8 lg:flex-row lg:gap-0">
            <div className="text-center">
                <h2 className=" text-2xl sm:text-3xl font-semibold ">Welcome Back, Alec</h2>
                <p className="text-gray-500 pt-1">View your quotes, invoices and more.</p>
            </div>

            <Button text="Hire new service"/>
            
        </div>


        <div className="flex gap-6 flex-col lg:flex-row">
            <Cards ammout="$100,000" text="Spent in Services"/>
            <Cards ammout="20" text="Open Projects"/>
        </div>
        

        <div className="flex flex-col gap-6">
            <SearchAndDate/>

            <TableUsers/>
        </div>

    </div>
  )
}

export default ContentMain