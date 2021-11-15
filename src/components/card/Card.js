import React from 'react';

const Card = (props) => {            
    return (        
        <div className="card" data-component="card">            
            <div className="cardContent">
                <div className="wrapTextCard">
                    <p className="projectNumber outlines">{props.number}</p>                
                    <div className="cardRichText">
                        <h2 className="cardTitle gradient-title">{props.title}</h2>
                        <h3 className="cardSubtitle">{props.subtitle}</h3>                     
                    </div>
                </div>               
                <a href={props.cardLink} className="blockLink">
                    <div className="cardContainerImage">
                        <img className="cardImg" src={props.source} alt={props.alt}/>
                    </div>
                </a>
            </div>           
        </div>
    );    
};

export default Card;