import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const authInitialState = localStorage.getItem("AuthToken") ? true : false




function AuthProvider({ children }) {

    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(authInitialState);
    const [isErr , setIsErr] = useState(false)

    const loginHandler = async (e, email, password) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/auth/login`, {
                email: email,
                password: password
            });
            localStorage.setItem("AuthToken", response.data.encodedToken);
            setIsAuth(true)
            navigate('/')
        } catch (error) {
             console.error(error);
             setIsErr(true);
        }
    };

    const signupHandler = async (e, {firstName,lastName,email,password}) => {
        e.preventDefault()
        try {
            const response = await axios.post(`/api/auth/signup`, {
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'password': password
            });
            localStorage.setItem("AuthToken", response.data.encodedToken);
            setIsAuth(true)
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    };

    

    return (

        <AuthContext.Provider value={{ isAuth, setIsAuth, loginHandler , signupHandler , navigate, isErr}} >
            {children}
        </AuthContext.Provider>

    );
}

export { AuthProvider, useAuth };