import Header from './components/Header'
import { useAuth0 } from '@auth0/auth0-react'
import LoadingScreen from './pages/LoadingScreen'

const App = () => {
    const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    if(isLoading) return <LoadingScreen />

    return(
        <div className="bg-gray-100 h-screen">
           <Header /> 

           {isAuthenticated ? (
               <button 
                 className="py-1 px-4 bg-red-400 text-white m-4 text-sm rounded-sm"
                 onClick={() => logout()}
                >
                    Logout
                </button>
           ) : (
                <button 
                  className="py-1 px-4 bg-blue-500 text-white m-4 text-sm rounded-sm"
                  onClick={() => loginWithRedirect()}
                >
                    Login
                </button>
           )}
        </div>
    )
}

export default App