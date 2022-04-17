import { useAuth0 } from '@auth0/auth0-react'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoMdGrid } from 'react-icons/io'
import { MdOutlineLabel } from 'react-icons/md'
import { BsPersonSquare } from 'react-icons/bs'
import { NavLink, Routes, Route, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Saved from '../components/Saved'
import Tagged from '../components/Tagged'

const Profile = () => {
    const { user } = useAuth0();
    const { userName } = useParams();

    return (
        <div className="h-screen bg-gray-50">
          <Header />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 py-10 border-b">
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

            <div className="grid grid-cols-3 mb-3">
              <div className="col-start-2 flex justify-between">
                <NavLink 
                  to={`/${userName}`} end className="text-xs text-gray-500 flex items-center py-3.4">
                  <IoMdGrid size=".9rem" className="mr-1" /> POSTS
                </NavLink>
                <NavLink to={`/${userName}/saved`} className="text-xs text-gray-500 flex items-center py-3.5">
                  <MdOutlineLabel size="1.2rem" className="mr-1" /> SAVED
                </NavLink>
                <NavLink to={`/${userName}/tagged`} className="text-xs text-gray-500 flex items-center py-3.5">
                  <BsPersonSquare size=".8rem" className="mr-1" /> TAGGED
                </NavLink>
              </div>
            </div>

            <div>
              <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/tagged" element={<Tagged />} />
              </Routes>
            </div>
          </div>
        </div>
    )
}

export default Profile