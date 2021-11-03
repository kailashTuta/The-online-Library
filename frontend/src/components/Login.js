import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="wrapper mt-5">
                <div className="title">
                    Login Form
                </div>
                <div className="form">
                    <div className="inputfield">
                        <label>Email</label>
                        <input type="email" className="input" />
                    </div>
                    <div className="inputfield">
                        <label>Password</label>
                        <input type="password" className="input" />
                    </div>
                    <div className="inputfield">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
