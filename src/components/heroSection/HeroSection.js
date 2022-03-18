import React from 'react';
//import SocialMediaIcons from '../IconMedia/SocialMediaIcons';
import heroImg from '../../images/pp-min.png';
//import CallToAction from '../callToAction/CallToAction';

const HeroSection = () => {
    return (
        <>            
        <header id="home" className="heroSection">
            <div className="content">          
                <div className="leftContent">
                    <h1 className="bigTitle">
                        <span className="gradient-title"> Hello. </span>
                        <br/>Je suis Hamidou</h1> 
                    <p className="smallTitle">Concepteur développeur d'applications</p>          
                </div>
                <div className="rightContent">
                    <img src={heroImg} className="heroImg" alt="Hamidou SOW"/>
                </div>
            </div>
            {/* <SocialMediaIcons/>  */}
            {/* <CallToAction /> */}
        </header>
        </>
    )
};
export default HeroSection;