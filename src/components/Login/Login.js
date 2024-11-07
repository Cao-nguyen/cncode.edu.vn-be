import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState } from 'react';
import './Login.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService'

const Login = (props) => {
    let history = useHistory()

    const [valueLogin, setValueLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if (!valueLogin) {
            toast.error('Vui lòng nhập số điện thoại hoặc địa chỉ Email')
            return
        }

        if (!password) {
            toast.error('Bạn chưa nhập mật khẩu')
            return
        }

        let response = await loginUser(valueLogin, password)

        if (response && response.data && response.data.EC === 0) {
            toast.success(response.data.EM)

            let data = {
                isAuthenticated: true,
                token: 'fake token'
            }

            sessionStorage.setItem('account', JSON.stringify(data))
            history.push('/')
            window.location.reload()
        }

        if (response && response.data && response.data.EC !== 0) {
            toast.error(response.data.EM)
        }
    }

    const handlePressEnter = (event) => {
        if (event.key === 'Enter') {
            handleLogin()
        }
    }

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
                        <input className="form-control"
                            value={valueLogin}
                            onChange={(event) => setValueLogin(event.target.value)}
                            type="text"
                            placeholder='Email address or phone number'
                        />
                        <input className="form-control"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            placeholder='Password'
                            onKeyDown={handlePressEnter}
                        />
                        <button className="btn btn-primary"
                            onClick={handleLogin}
                        >Login</button>
                        <span className="text-center">
                            <a href='/login' className='forgot-password'>Forgot your password?</a>
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