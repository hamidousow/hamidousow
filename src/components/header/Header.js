import React from 'react';
import CallToAction from '../callToAction/CallToAction';

const Header = (props) => {
    return (
        <header className="header"> 
            <div className="content">          
                <div className="leftContent">
                    <h1 className="bigTitle"> {props.title} </h1> 
                    <p className="smallTitle">{props.subtitle}</p>          
                </div>
                <div className="rightContent">
                    <img src={props.image} className={props.className} alt={props.alt}/>
                </div>
            </div>           
            <CallToAction/>
        </header>
    );
};

export default Header;