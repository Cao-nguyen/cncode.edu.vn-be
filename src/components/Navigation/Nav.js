import React, { useEffect, useState } from 'react';
import './Nav.scss';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Nav = () => {
    let history = useHistory()
    // const isLoggedIn = Boolean(sessionStorage.getItem('account'));

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        let session = sessionStorage.getItem('account')
        if (session) {
            setIsShow(true)
            history.push('/')
        }
    }, [])

    return (
        <>
            <div className="mt-1">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact>Trang chủ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/users" className="nav-link">Người dùng</NavLink>
                    </li>
                    {isShow === false &&
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">Đăng nhập</NavLink>
                        </li>
                    }
                </ul>
            </div>
        </>
    );
};

export default Nav;