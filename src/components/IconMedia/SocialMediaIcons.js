import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialMediaIcons = () => {
    return (
        <div className="socialMediaIcons">
            <ul className="containerIcons">                    
                <a className="iconMedia" href="https://github.com/hamidousow"><FaGithub/></a>
                <a className="iconMedia" href="https://www.instagram.com/besowdesign/"><FaInstagram/></a>
                <a className="iconMedia" href="https://www.linkedin.com/in/hamidou-sow-6725a5b0/"><FaLinkedinIn/></a>
            </ul>            
        </div>
    );
};

export default SocialMediaIcons;
