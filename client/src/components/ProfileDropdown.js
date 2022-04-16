import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineLabel } from 'react-icons/md'
import { IoSettingsOutline } from 'react-icons/io5'
import { useAuth0 } from '@auth0/auth0-react'
import { useUserContext } from './../contexts/UserContextProvider'

const ProfileDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { user } = useUserContext();

    const { logout } = useAuth0();

    return(
        <div className="relative">
            <img 
                src={user.picture}
                alt="profile" 
                className="w-7 h-7 rounded-full object-cover mx-2 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
                <div 
                    className="w-64 shadow-md rounded absolute bg-white right-0 top-12 text-sm"
                    data-testid="profile-dropdown"
                >
                    <Link to="/profile" className="hover:bg-gray-100 w-full py-2 px-3 flex items-center">
                        <CgProfile className="mr-2" /> Profile
                    </Link>
                    <Link to="/saved" className="hover:bg-gray-100 w-full py-2 px-3 flex items-center">
                        <MdOutlineLabel className="mr-2" /> Saved
                    </Link>
                    <Link to="/settings" className="hover:bg-gray-100 w-full py-2 px-3 flex items-center">
                        <IoSettingsOutline className="mr-2" /> Settings
                    </Link>
                    <hr />
                    <button onClick={() => logout()} className="hover:bg-gray-100 w-full py-2 px-3 text-left flex items-center">
                        Log Out
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProfileDropdown