import { createContext, useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext)
}

function UserContextProvider({ children }) {
  const { user } = useAuth0();

  return (
    <UserContext.Provider value={{ 
      user: user ? user : { picture: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
    }}>
        { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider