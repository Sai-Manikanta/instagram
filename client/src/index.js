import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App';
import UserContextProvider from './contexts/UserContextProvider'
import './index.css'

const clientID = process.env.REACT_APP_AUTH0_CLIENT;
const domainID = process.env.REACT_APP_AUTH0_DOMAIN_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
          <Auth0Provider
            domain={domainID}
            clientId={clientID}
            redirectUri={window.location.origin}
          >
            <UserContextProvider>
              <App />
            </UserContextProvider>
          </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>
)