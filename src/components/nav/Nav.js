import React, { useState } from 'react';
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
            link: "/about"
        },
        {
            text: "contact",
            className: "linkNav",
            link: "/"
        }
    ]

    const [mobileMenu, setMobileMenu] = useState(false);
    const [navOpacity, setNavOpacity] = useState(false);   

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
        setNavOpacity(true);        
    }  

    const changeNavBackground = () => {
        if(window.scrollY >= 50) {
            setNavOpacity(true);
        }        

        else {
            setNavOpacity(false);
        }
    } 
    

    window.addEventListener('scroll', changeNavBackground);

    return (
        <>
        <nav className={navOpacity ? "navigation active" : "navigation"} >
            <div id="navContent">
                <HomeLogo />
                <span id="btnBurger" onClick={toggleMenu}></span>
                <ul className={mobileMenu ? "menu active" : "menu" }>
                    {menu.map((navlink) => (
                        <NavLink className={navlink.className} exact to={navlink.link} onClick={toggleMenu}> {navlink.text} </NavLink>
                    ))}
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Nav;