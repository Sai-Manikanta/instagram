import { useAuth0 } from '@auth0/auth0-react'
import Header from '../components/Header'

const Home = () => {
    const { isAuthenticated, logout } = useAuth0();

    return(
        <div className="bg-gray-100 h-screen">
            <Header />
            {isAuthenticated && (
               <button 
                 className="py-1 px-4 bg-red-400 text-white m-4 text-sm rounded-sm"
                 onClick={() => logout()}
               >
                   Logout
               </button>
            )}
        </div>
    )
}

export default Home