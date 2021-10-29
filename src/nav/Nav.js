import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeLogo from '../logo/HomeLogo';

const Nav = () => {

    const menu = [
        {
            text: "work",
            className: "linkNav",
            link: "/"
        },
        {
            text: "about",
            className: "linkNav",
            link: "/"
        },
        {
            text: "contact",
            className: "linkNav",
            link: "/"
        }
    ]

    return (
        <nav id="navigation">
            <HomeLogo/>
            <ul id="menu">
                {menu.map((navlink) => (
                    <NavLink className={navlink.className} exact to={navlink.link}> {navlink.text} </NavLink>
                ))}
            </ul>            
        </nav>
    );
};

export default Nav;