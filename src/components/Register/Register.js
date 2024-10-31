import React from 'react';
import './Register.scss'

const Register = (props) => {
    return (
        <div className="register-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className="brand">Lý Cao Nguyên</div>
                        <div className="detail">Chào mừng bạn đến với website của chúng tôi. </div>
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">Lý Cao Nguyên</div>

                        <div className="form-group">
                            <label>Email: </label>
                            <input className="form-control" type="text" placeholder='Email address' />
                        </div>
                        <div className="form-group">
                            <label>Phone: </label>
                            <input className="form-control" type="text" placeholder='Phone number' />
                        </div>
                        <div className="form-group">
                            <label>Username: </label>
                            <input className="form-control" type="text" placeholder='Username' />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input className="form-control" type="password" placeholder='Password' />
                        </div>
                        <div className="form-group">
                            <label>re-enter password: </label>
                            <input className="form-control" type="password" placeholder='Password' />
                        </div>
                        <div class="form-group">
                            <button className="btn btn-primary form-control">Tạo tài khoản</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Register; 