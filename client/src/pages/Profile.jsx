import { useAuth0 } from '@auth0/auth0-react'
import { IoSettingsOutline } from 'react-icons/io5'
import Header from '../components/Header'

const Profile = () => {
    const { user } = useAuth0();

    console.log(user);

    return (
        <div className="h-screen bg-gray-50">
          <Header />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 border-b py-10">
                <div className="flex justify-center">
                  <img src={user.picture} alt={user.name} className="rounded-full w-36 h-36" />
                </div>
                <div className="col-span-2">
                    <div className="flex items-center mb-4">
                      <h1 className="text-2xl mr-5">{user.name}</h1>
                      <button className="py-1 px-2 border rounded text-sm mr-4">Edit Profile</button>
                      <button>
                        <IoSettingsOutline size="1.4rem" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex justify-between">
                            <span><span className="font-medium">1</span> post</span>
                            <span><span className="font-medium">87</span> followers</span>
                            <span><span className="font-medium">54</span> following</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Profile