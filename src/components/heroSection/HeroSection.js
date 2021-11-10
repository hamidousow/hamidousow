import React from 'react';
//import SocialMediaIcons from '../IconMedia/SocialMediaIcons';

const HeroSection = () => {
    return (
        <>            
        <header id="heroSection" className="heroSection">
            <div className="content">          
                <div className="leftContent">
                    <h1 className="bigTitle">
                        <span className="gradient-title"> Hello. </span>
                        <br/>I am Hamidou</h1> 
                    <p className="smallTitle">developer & ui / ux designer</p>          
                </div>
                <div className="rightContent">
                    <img src="" className="ImgSection" alt="Hamidou SOW"/>
                </div>
            </div>
            {/* <SocialMediaIcons/> */}
        </header>
        </>
    )
};
export default HeroSection;