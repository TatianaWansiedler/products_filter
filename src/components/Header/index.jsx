import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css'

const Header = () => {
    const check = ({isActive}) => isActive ? `${s.link} ${s.active}` : s.link
    
    return (
        <nav className={s.nav}>
            <NavLink className={check} to='/' >Добавить товар</NavLink>
            <NavLink className={check} to='/products' >Все товары</NavLink>
        </nav>
    );
};

export default Header;