import { FiSearch, FiCreditCard, FiSettings, FiLifeBuoy, FiLogOut, FiBell } from 'react-icons/fi';
import { AiOutlineFile, AiOutlinePlus, AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineCalendar, AiOutlineCheck, AiOutlineLine } from 'react-icons/ai';
import { BiDotsVerticalRounded, BiHomeAlt, BiMenuAltRight, BiMenuAltLeft} from 'react-icons/bi';
import { MdFilterList } from 'react-icons/md';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdOutlineIndeterminateCheckBox } from 'react-icons/md';
import { ImFilesEmpty } from 'react-icons/im';


export const icons = {
    searchIcon: <FiSearch/>,
    homeIcon: <BiHomeAlt/>,
    contractIcon: <ImFilesEmpty/>,
    notificationsIcon: <FiBell/>,
    paymentsIcon: <FiCreditCard/>,
    quotesIcon: <AiOutlineFile/>,
    settingsIcon: <FiSettings/>,
    lifeIcon: <FiLifeBuoy/>,
    dotsIcon: <BiDotsVerticalRounded/>,
    plusIcon : <AiOutlinePlus/>,
    arrowUpIcon : <AiOutlineArrowUp/>,
    arrowDownIcon : <AiOutlineArrowDown/>,
    logOutIcon : <FiLogOut/>,
    filterIcon: <MdFilterList/>,
    dateIcon : <AiOutlineCalendar/>,
    checkIcon: <AiOutlineCheck/>,
    lineIcon:<AiOutlineLine/>,
    circleIcon:<GoPrimitiveDot/>,
    menuIconLeft: <BiMenuAltLeft/>,
    menuIconRight: <BiMenuAltRight/>,
    checkBox: <MdOutlineIndeterminateCheckBox/>,

}


const Icons = ({icon_type, className}) => {

  return (

    <p className={className}>{icon_type}</p>

  )
}


export default Icons
