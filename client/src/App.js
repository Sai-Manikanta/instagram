import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom'
import LoadingScreen from './pages/LoadingScreen'

import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
    const { isLoading, isAuthenticated } = useAuth0();

    if(isLoading) return <LoadingScreen />

    return(
        <Routes>
            <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
            <Route path="/:userName/*" element={<Profile />} />
        </Routes>
    )
}

export default App