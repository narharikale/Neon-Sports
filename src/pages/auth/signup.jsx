import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <div className="auth-form-container">
                <form className="auth-form">
                    <h1>Sign Up</h1>
                    <div className="input-container w-100-per">
                        <label htmlFor="Signup-fullName">Full name</label>
                        <input id="Signup-fullName" placeholder="john doe" type="text" />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="Signup-email">Email address</label>
                        <input id="Signup-email" type="email" placeholder="your@mail.com" />
                    </div>
                    <div className="input-container w-100-per">
                            <label htmlFor="Signup-password"> Password</label>
                        <input id="Signup-password" type="password" />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="Signup-confirm-password">Confirm Password</label>
                        <input id="Signup-confirm-password" type="password" />
                    </div>
                    <div className="d-flex w-100-per justify-between">
                        <label htmlFor="rememberMe">
                            <input id="rememberMe" type="checkbox" /> I Accept all terms and
                            conditions
                        </label>
                    </div>
                    <div className="btn btn-primary font-size-regular w-100-per">
                        Create New Account
                    </div>
                    <Link to='/login' className="color-gray-500 d-flex gap-sm">
                        Alreday have account<span className="material-icons">login</span>{" "}
                    </Link>
                </form>
            </div>

        </>
    );
}

export { SignUp };