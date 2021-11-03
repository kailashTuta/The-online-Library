import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <div className="container-signup">
                <div className="signup-more"></div>
                <div className="wrap-signup">
                    <form action="" className="signup-form">
                        <span className="signup-form-title">Sign Up</span>

                        <div className="wrap-input">
                            <span className="label-input">Name</span>
                            <input className="input" type="text" name="name" placeholder="Username" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Email</span>
                            <input className="input" type="email" name="email" placeholder="Email Address" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Phone</span>
                            <input className="input" type="Number" name="phone" placeholder="Phone Number" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Password</span>
                            <input className="input" type="password" name="password" placeholder="**********" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="wrap-input">
                            <span className="label-input">Confirm Password</span>
                            <input className="input" type="password" name="cpassword" placeholder="**********" />
                            <span className="focus-input"></span>
                        </div>

                        <div className="container-signup-form-btn">
                            <div className="wrap-signup-form-btn">
                                <button className="signup-form-btn">Sign Up</button>
                            </div>

                            <Link className="login-button hov1" to="/login">Sign in <i className="fas fa-sign-in-alt"></i></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
