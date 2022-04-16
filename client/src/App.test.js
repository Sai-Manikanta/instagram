import { render, screen } from '@testing-library/react'
import { Auth0Provider } from '@auth0/auth0-react'
import '@testing-library/jest-dom'
import UserContextProvider from './contexts/UserContextProvider'
import App from './App'

const clientID = process.env.REACT_APP_AUTH0_CLIENT;
const domainID = process.env.REACT_APP_AUTH0_DOMAIN_ID;

const MockApp = () => {
  return(
    <Auth0Provider
      domain={domainID}
      clientId={clientID}
      redirectUri={window.location.origin}
    >
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Auth0Provider>
  )
}

describe('App', () => {
    test('should show logo screen while authetication loading', () => {
        render(<MockApp />);
    })
})