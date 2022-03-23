import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";


function Login() {
    const { loginHandler , isErr} = useAuth()
    const [user, setUser] = useState({
        'email': "",
        'password': "",
    });


    return (
        <>
            <div className="auth-form-container">
                <form className="auth-form" onSubmit={(e) => loginHandler(e, user.email, user.password)}>
                    <h1>Login</h1>
                    <div className="input-container w-100-per">
                        <label htmlFor="login-email">Email address*</label>
                        <input
                            id="login-email"
                            type="email"
                            placeholder="your@mail.com"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            required />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="login-password">Password*</label>
                        <input
                            id="login-password"
                            type="password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            required />
                        
                    </div>
                    { isErr ? <small className="color-red-600 bg-red-200 p-alert w-100-per">&#9888; Some error occurred </small> :<></> }
                  
                    <div className="d-flex w-100-per justify-between">
                        <label htmlFor="rememberMe">
                            <input
                                id="rememberMe"
                                type="checkbox" />
                            Remember me
                        </label>
                        <Link to='/forgotpassword' className="color-gray-500 text-underline">
                            Forgot Password
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary font-size-regular w-100-per"
                        >Login</button>
                    <button
                        className="btn btn-outline font-size-regular w-100-per"
                        onClick={(e) => loginHandler(e, 'adarshbalika@gmail.com', 'adarshbalika')} >
                        Login as a Guest</button>
                    <Link to='/signup' className="color-gray-500 d-flex gap-sm">
                        Create new account<span className="material-icons">arrow_forward</span>{" "}
                    </Link>
                </form>
            </div>

        </>
    );
}

export { Login };