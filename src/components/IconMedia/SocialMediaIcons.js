import React from 'react';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const SocialMediaIcons = () => {
    return (
        <div className="socialMediaIcons">
            <ul className="containerIcons">                    
                <a className="iconMedia" href="https://github.com/hamidousow"><FaGithubSquare/></a>
                <a className="iconMedia" href="https://www.instagram.com/besowdesign/"><FaInstagramSquare/></a>
                <a className="iconMedia" href="https://www.linkedin.com/in/hamidou-sow-6725a5b0/"><FaLinkedin/></a>
            </ul>            
        </div>
    );
};

export default SocialMediaIcons;
