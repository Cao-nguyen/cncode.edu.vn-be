import React from 'react';
import './Nav.scss';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div class="topnav">
            <NavLink to="/" exact>Trang chủ</NavLink>
            <NavLink to="/login">Đăng nhập</NavLink>
        </div>
    );
};

export default Nav;