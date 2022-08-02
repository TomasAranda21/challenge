import React from 'react'
import Icons, {icons} from '../icons/Icons'
import ProfileImg from '../profileImg/ProfileImg'
import NavBarLi from './NavBarLi'

const NavBarList = () => {
  return (

    <nav className="grid h-screen">

        <ul className="flex flex-col gap-4 ">
            <NavBarLi icon={icons.homeIcon} text="Projects"/>
            <NavBarLi icon={icons.quotesIcon} text="Quotes"/>
            <NavBarLi icon={icons.contractIcon} text="Contracts"/>
            <NavBarLi icon={icons.notificationsIcon} text="Notifications"/>
            <NavBarLi icon={icons.paymentsIcon} text="Payments"/>
        </ul>


        <div className="grid gap-5 content-end">
            <ul className="flex justify-items-end flex-col gap-4 border-b pb-7">
                <NavBarLi icon={icons.lifeIcon} text="Support"/>
                <NavBarLi icon={icons.settingsIcon} text="Settings"/>

            </ul>

            <div className="flex gap-6 justify-between">

                <ProfileImg img="1"
                    name="Olivia Rhye" email="olivia@untitledui.com" />

                <Icons icon_type={icons.logOutIcon} className="text-gray-600 lg:text-xl"/>

            </div>


        </div>



    </nav>

  )
}

export default NavBarList