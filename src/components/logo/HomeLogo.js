import React from 'react';
import { animateScroll as scroll } from "react-scroll";

const HomeLogo = () => {
    return (
        <>
        <div id="homeLogo" onClick={() => scroll.scrollToTop()}>
            <img src="../img/myLogo.png" alt="logo Hamidou Sow, retour page d'accueil"/>
        </div>           
        </>
    );
};

export default HomeLogo;
