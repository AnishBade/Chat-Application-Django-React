import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom";

const WithAuthentication = (WrappedComponent) => {
    return function AuthComponent(props) {
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            const token = document.cookie.split('; ').find(row => row.startsWith('token='))
            console.log("#######", token);
            if (token) {
                console.log("*********");
                setIsAuthenticated(true);
                console.log('is authenticated changed', isAuthenticated);
            } else {
                console.log('else block');
                setIsAuthenticated(false);
            }

        }, []);

        console.log('isauthenticated', isAuthenticated);
        if (isAuthenticated) {
            console.log('this called')
            return <WrappedComponent {...props} />
        } else {
            return <Navigate to='/login/' />
        }
    }
}

export default WithAuthentication;