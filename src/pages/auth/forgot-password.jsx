import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <>
            <div className="auth-form-container">
                <form className="auth-form ">
                    <h2 className="m-0">Forgot Password ?</h2>
                    <p className="text-center color-gray-500">
                        Enter your email below to receive your password reset instructions
                    </p>
                    <div className="input-container w-100-per">
                        <label htmlFor="login-email">Email address</label>
                        <input id="login-email" placeholder="your@mail.com" type="text" />
                    </div>
                    <button className="btn btn-primary font-size-regular w-100-per">Send</button>
                    <Link to='/login' className="color-gray-500 d-flex gap-sm">
                        <span className="material-icons">arrow_back</span>Back to login
                    </Link>
                </form>
            </div>

        </>
    );
}

export { ForgotPassword };