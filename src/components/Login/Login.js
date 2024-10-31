import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';
import './Login.scss'

const Login = (props) => {
    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className="brand">Lý Cao Nguyên</div>
                        <div className="detail">Chào mừng bạn đến với website của chúng tôi. </div>
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">Lý Cao Nguyên</div>
                        <input className="form-control" type="text" placeholder='Email address or phone number' />
                        <input className="form-control" type="password" placeholder='Password' />
                        <button className="btn btn-primary">Login</button>
                        <span className="text-center">
                            <a href='#' className='forgot-password'>Forgot your password?</a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <Link className="btn btn-success" to='/register'>Create New Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;