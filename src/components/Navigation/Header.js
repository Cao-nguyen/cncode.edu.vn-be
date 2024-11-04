import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Header = (props) => {
    return (
        <div className="topnav">
            <NavLink to="/*" exact>Trang chủ</NavLink>
        </div>
    );
}

export default Header;