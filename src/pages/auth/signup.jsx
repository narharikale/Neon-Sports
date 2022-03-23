import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

function SignUp() {
    const { signupHandler } = useAuth()
    const [newUser , setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword :""
    })
    
    return (
        <>
            <div className="auth-form-container">
                <form action="submit" method="post" className="auth-form">
                    <h1>Sign Up</h1>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-firstName">First name</label>
                        <input
                            id="signup-firstName"
                            placeholder="john doe"
                            type="text" 
                            value={newUser.firstName}
                            required
                            onChange={ (e) => setNewUser({...newUser , firstName:e.target.value}) }/>
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-lastName">Last name</label>
                        <input
                            id="signup-lastName"
                            placeholder="john doe"
                            type="text" 
                            value={newUser.lastName}
                            required
                            onChange={ (e) => setNewUser({...newUser , lastName:e.target.value}) }
                            />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-email">Email address</label>
                        <input
                            id="signup-email"
                            type="email"
                            placeholder="your@mail.com"
                            value={newUser.email}
                            required
                            onChange={ (e) => setNewUser({...newUser , email:e.target.value}) } />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-password"> Password</label>
                        <input
                            id="signup-password"
                            type="password"
                            value={newUser.password}
                            required
                            onChange={ (e) => setNewUser({...newUser , password:e.target.value}) } />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="signup-confirm-password">Confirm Password</label>
                        <input
                            id="signup-confirm-password"
                            type="password"
                            value={newUser.confirmPassword}
                            required
                            onChange={ (e) => setNewUser({...newUser , confirmPassword:e.target.value}) } />
                    </div>
                    <div className="d-flex w-100-per justify-between">
                        <label htmlFor="rememberMe">
                            <input
                                id="rememberMe"
                                type="checkbox" /> I Accept all terms and
                            conditions
                        </label>
                    </div>
                    <button type="submit" onClick={ (e) => signupHandler(e , {newUser}) } className="btn btn-primary font-size-regular w-100-per">
                        Create New Account
                    </button> 
                    <Link to='/login' className="color-gray-500 d-flex gap-sm">
                        Alreday have account<span className="material-icons">login</span>{" "}
                    </Link>
                </form>
            </div>

        </>
    );
}

export { SignUp };