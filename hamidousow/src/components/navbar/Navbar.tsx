import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {

    const links = [
        {
            id: 1,
            slug: '/',
            title: 'About'
        },
        {
            id: 2,
            slug: 'projets',
            title: 'Projets'
        },  {
            id: 3,
            slug: 'contact',
            title: 'Contact'
        }
        
    ];
    
    return (
        <>
        <nav data-navigation="navigation"  id="nav-desktop" className="navigation">
            <div className='container nav-content d-flex align-items-center justify-content-between py-4'>
                <div id="nav-logo" className="nav-logo">
                    {/*  position-fixed bottom-50 */}
                    <Link to="/" className='fw-bolder fs-5'> 
                        Hamidou <span className='fw-light'>SOW</span>
                    </Link>                
                </div> 
                <ul className='nav-menu d-flex flex-row align-items-center gap-4 my-0'>
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link to={link.slug} className='nav-link fs-5'>{link.title}</Link>
                        </li>
                    ))}
                    <Link to='/cv' className='nav-cv button button-style'> cv </Link>
                </ul> 

                <div className='switchMode'>      
                          {/* onClick={handleClick}  */}
                    <input type="checkbox" id="btnSwitchMode" className='btnSwitchMode'/>
                    <label htmlFor="btnSwitchMode"></label>
                </div>    
                <span id="btnBurger" className='btnBurger'></span>   
            </div>
        </nav>  
        </>
    )
}
