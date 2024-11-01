import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './Register.scss'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const validate = () => {
        if (!email) {
            toast.error('Vui lòng nhập email')
            return false
        }
        if (!phone) {
            toast.error('Vui lòng nhập số điện thoại')
            return false
        }
        if (!username) {
            toast.error('Vui lòng nhập tên người dùng')
            return false
        }
        if (!password) {
            toast.error('Vui lòng nhập mật khẩu')
            return false
        }

        if (password != confirmPassword) {
            toast.error('Xác nhận mật khẩu của bạn không đúng')
            return false
        }

        let reg = /\S+@\S+\.\S+/
        if (reg.test(email)) {
            toast.error('Email bạn nhập không đúng định dạng')
            return false
        }

        return true
    }

    const handleRegister = () => {
        let check = validate()

        let userData = { email, phone, username, password }
    }
    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/test-api').then(data => {

    //     })
    // }, [])

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
                            <input className="form-control" type="text" placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone: </label>
                            <input className="form-control" type="text" placeholder='Phone number'
                                value={phone} onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Username: </label>
                            <input className="form-control" type="text" placeholder='Username'
                                value={username} onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input className="form-control" type="password" placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>re-enter password: </label>
                            <input className="form-control" type="password" placeholder='Password'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <button className="btn btn-primary form-control"
                                onClick={() => handleRegister()}
                            >Tạo tài khoản</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Register; 