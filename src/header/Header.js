import React from 'react';
import CallToAction from '../callToAction/CallToAction';

const Header = () => {
    return (
        <header className="header"> 
            <div className="content">          
                    <div className="leftContent">
                        <h1 className="bigTitle"> Titre du projet </h1> 
                        <p className="smallTitle">type de projet</p>          
                    </div>
                    <div className="rightContent">
                        <img src="" className="ImgSection"/>
                    </div>
            </div>           
            <CallToAction/>
        </header>
    );
};

export default Header;