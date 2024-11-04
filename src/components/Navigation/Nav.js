import React from 'react';
import './Nav.scss';
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="topnav">
            <img className="logo mx-2 mt-0.5" src={logo} alt={logo} />
            <NavLink to="/" exact>Trang chủ</NavLink>
            <NavLink to="/login">Đăng nhập</NavLink>
        </div>
    );
};

export default Nav;