import { useState } from 'react'
import { useUserContext } from './../contexts/UserContextProvider'

const ProfileDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { user } = useUserContext();

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
                    className="p-4 w-64 shadow-md rounded absolute bg-white right-0 top-12"
                    data-testid="profile-dropdown"
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti ratione modi, aspernatur minima esse optio cum consectetur praesentium rem corporis eius placeat aut culpa ea hic autem facilis dolorem?</p>
                </div>
            )}
        </div>
    )
}

export default ProfileDropdown