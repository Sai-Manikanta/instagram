import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return(
        <div>
            <button 
                className="py-1 px-4 bg-blue-500 text-white m-4 text-sm rounded-sm"
                onClick={() => loginWithRedirect()}
            >
                Login
            </button>
        </div>
    )
}

export default Login