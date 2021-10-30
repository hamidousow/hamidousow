import React from 'react';
import LeftContent from '../leftContent/LeftContent';
import RightContent from '../rightContent/RightContent';

const HeroSection = () => {
    return (
        <section id="home" className="heroSection">
            <LeftContent/>
            <RightContent/>           
        </section>
    );
};

export default HeroSection;