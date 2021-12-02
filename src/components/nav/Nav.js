import React, { useState } from 'react';
import { Link } from 'react-scroll';
import SocialMediaIcons from '../IconMedia/SocialMediaIcons';
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
                <ul id="menuDesktop" className="menu">
                    <Link className="linkNav" to="about" smooth={true} duration={1000}>
                        About
                    </Link> 
                    <Link className="linkNav" to="work" smooth={true} duration={1000}>
                        Work
                    </Link> 
                    <Link className="linkNav" to="contact" smooth={true} duration={1000}>
                        Contact
                    </Link>
                </ul>
            </div>
        </nav>
        <aside className={mobileMenu ? "menu active" : "menuMobile" }>
            <ul>
                <Link className="linkNav" to="about" smooth={true} duration={1000} onClick={toggleMenu}>
                    About
                </Link> 
                <Link className="linkNav" to="work" smooth={true} duration={1000} onClick={toggleMenu}>
                    Work
                </Link> 
                <Link className="linkNav" to="contact" smooth={true} duration={1000} onClick={toggleMenu}>
                    Contact
                </Link> 
            </ul>            
            <SocialMediaIcons/>
        </aside>
        </>
    );
};

export default Nav;