import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css'
import Logo from '../../assets/IMG/Logo.png'

const Navigation = (props) => {
    return (
        <nav>
            <NavLink to={"./"}><img src={Logo} alt=""/> </NavLink>

            <div className='NavigationNavLinks'>
            <ul >
                <NavLink to={'/Chat'}>Чат</NavLink>
                <NavLink to={'/Groups'}>Группы</NavLink>
                <NavLink to={'/News'}>Новости</NavLink>
            </ul>
            <NavLink className='ProfileImg' to={'/Profile'}><img src={props.Ava} alt=""/></NavLink>
            </div>
        </nav>
    );
};

export default Navigation;