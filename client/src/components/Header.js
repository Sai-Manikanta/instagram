import { AiFillHome, AiOutlineHeart } from 'react-icons/ai'
import { RiMessengerLine, RiCompass3Line } from 'react-icons/ri'
import { FiPlusSquare } from 'react-icons/fi'
import Search from './Search';
import ProfileDropdown from './ProfileDropdown'

const Header = () => {
  return(
    <header className="p-4 border-b bg-white">
        <div className="flex max-w-4xl mx-auto justify-between items-center">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />  
          <Search />
          <div className="flex items-center">
            <AiFillHome size="1.6rem" className="mx-2" />
            <RiMessengerLine size="1.6rem" className="mx-2" />
            <FiPlusSquare size="1.6rem" className="mx-2" />
            <RiCompass3Line size="1.6rem" className="mx-2" />
            <AiOutlineHeart size="1.6rem" className="mx-2" />
            <ProfileDropdown />
          </div>
        </div>
    </header>
  )
}

export default Header