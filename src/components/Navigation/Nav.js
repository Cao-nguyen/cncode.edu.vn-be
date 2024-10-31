import React from 'react';
import './Nav.scss';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div class="topnav">
                <NavLink to="/">Trang chủ</NavLink>
                <NavLink to="/gioithieu">Giới thiệu</NavLink>
                <NavLink to="/khoahoc">Khoá học</NavLink>
                <NavLink to="/tintuc">Tin tức</NavLink>
                <NavLink to="/login">Đăng nhập</NavLink>
            </div>
        </div>
    );
};

export default Nav;