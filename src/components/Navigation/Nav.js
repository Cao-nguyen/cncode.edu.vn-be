import React from 'react';
import './Nav.scss';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

const Nav = () => {
    const isLoggedIn = Boolean(sessionStorage.getItem('account'));

    return (
        <div className="mt-1">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" exact>Trang chủ</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/users" className="nav-link">Người dùng</NavLink>
                </li>
                <li className="nav-item">
                    {!isLoggedIn && <NavLink to="/login" className="nav-link">Đăng nhập</NavLink>}
                </li>
            </ul>
        </div>
    );
};

export default Nav;