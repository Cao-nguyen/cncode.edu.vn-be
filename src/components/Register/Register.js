import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterNewUser } from '../../services/userService';
import { toast } from 'react-toastify';
import './Register.scss'

const Register = (props) => {
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidUsername: true,
        isValidPassword: true,
        isValidConfirmPassword: true
    }
    const [objectCheckInput, setObjectCheckInput] = useState(defaultValidInput)

    const validate = () => {
        setObjectCheckInput(defaultValidInput)

        if (!email) {
            toast.error('Vui lòng nhập email')
            setObjectCheckInput({ ...defaultValidInput, isValidEmail: false })
            return false
        }

        let reg = /\S+@\S+\.\S+/
        if (!reg.test(email)) {
            setObjectCheckInput({ ...defaultValidInput, isValidEmail: false })
            toast.error('Email bạn nhập không đúng định dạng')
            return false
        }

        if (!phone) {
            toast.error('Vui lòng nhập số điện thoại')
            setObjectCheckInput({ ...defaultValidInput, isValidPhone: false })
            return false
        }
        if (!username) {
            toast.error('Vui lòng nhập tên người dùng')
            setObjectCheckInput({ ...defaultValidInput, isValidUsername: false })
            return false
        }
        if (!password) {
            toast.error('Vui lòng nhập mật khẩu')
            setObjectCheckInput({ ...defaultValidInput, isValidPassword: false })
            return false
        }

        if (password !== confirmPassword) {
            toast.error('Xác nhận mật khẩu của bạn không đúng')
            setObjectCheckInput({ ...defaultValidInput, isValidConfirmPassword: false })
            return false
        }

        return true
    }

    const handleRegister = async () => {
        let check = validate();

        if (check === true) {
            let response = await RegisterNewUser(email, phone, username, password)

            let serverData = response.data

            if (+serverData.EC === 0) {
                toast.success(serverData.EM)

                history.push('/login')

            } else {
                toast.success(serverData.EM)
            }
        }
    };

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
                            <input className={objectCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} type="text" placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone: </label>
                            <input className={objectCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'} type="text" placeholder='Phone number'
                                value={phone} onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Username: </label>
                            <input className={objectCheckInput.isValidUsername ? 'form-control' : 'form-control is-invalid'} type="text" placeholder='Username'
                                value={username} onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input className={objectCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'} type="password" placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>re-enter password: </label>
                            <input className={objectCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'} type="password" placeholder='Password'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
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