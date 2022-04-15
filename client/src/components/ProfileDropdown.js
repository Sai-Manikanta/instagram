import { useState } from 'react'

const ProfileDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return(
        <div className="relative">
            <img 
                src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
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