import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css'
import Logo from '../../assets/IMG/Logo.png'

const Navigation = () => {
    return (
        <nav>
            <NavLink to={"./"}><img src={Logo} alt=""/> </NavLink>

            <ul className='NavigationNavLinks'>
                <NavLink to={'/Chat'}>Чат</NavLink>
                <NavLink to={'/Groups'}>Группы</NavLink>
                <NavLink to={'/News'}>Новости</NavLink>
                <NavLink to={'/Profile'}>Моя страница</NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;