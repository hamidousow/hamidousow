import React, { useState } from 'react';
import { Link } from 'react-scroll';
import HomeLogo from '../logo/HomeLogo';

const Nav = () => {

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
                {/* <Link to="home" smooth={true} duration={1000} > */}
                <HomeLogo />
                <span id="btnBurger" onClick={toggleMenu}></span>
                <ul className={mobileMenu ? "menu active" : "menu" }>                                       
                    <Link className="linkNav" to="about" smooth={true} duration={1000} onClick={toggleMenu}>
                        <li>About</li>
                    </Link> 
                    <Link className="linkNav" to="work" smooth={true} duration={1000} onClick={toggleMenu}>
                        <li>Work</li>
                    </Link> 
                    <Link className="linkNav" to="contact" smooth={true} duration={1000} onClick={toggleMenu}>
                        <li>Contact</li>
                    </Link> 
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Nav;