import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="container-signin">
                <div className="signin-more"></div>
                <div className="wrap-signin">
                    <form action="" className="signin-form">
                        <span className="signin-form-title">Log in</span>

                        <div className="wrap-input">
                            <span className="label-input">Email</span>
                            <input className="input" type="email" name="email" placeholder="Email Address" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Password</span>
                            <input className="input" type="password" name="password" placeholder="**********" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="container-signin-form-btn">
                            <div className="wrap-signin-form-btn">
                                <button className="signin-form-btn">Login</button>
                            </div>
                            <Link className="signup-button hov1" to="/signup">Sign up <i className="fas fa-user-plus"></i></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
