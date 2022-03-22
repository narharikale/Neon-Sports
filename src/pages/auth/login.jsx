import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="auth-form-container">
                <form action="" className="auth-form">
                    <h1>Login</h1>
                    <div className="input-container w-100-per">
                        <label htmlFor="login-email">Email address*</label>
                        <input id="login-email" type="email" placeholder="your@mail.com" required="" />
                    </div>
                    <div className="input-container w-100-per">
                        <label htmlFor="login-password">Password*</label>
                        <input id="login-password" type="password"  required="" />
                    </div>
                    <div className="d-flex w-100-per justify-between">
                        <label htmlFor="rememberMe">
                            <input id="rememberMe" type="checkbox" />
                            Remember me
                        </label>
                        <Link to='/forgotpassword' className="color-gray-500 text-underline">
                            Forgot Password
                        </Link>
                    </div>
                    <button className="btn btn-primary font-size-regular w-100-per">Login</button>
                    <Link to='/signup' className="color-gray-500 d-flex gap-sm">
                        Create new account<span className="material-icons">arrow_forward</span>{" "}
                    </Link>
                </form>
            </div>

        </>
    );
}

export { Login };