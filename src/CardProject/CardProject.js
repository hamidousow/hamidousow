import React from 'react';

const CardProject = () => {
    return (
        <div className="card" data-component="card">
            {/* <span className="projectNumber">01</span> */}
            <div className="cardContent">
                <p className="projectNumber outlines">01</p>                
                <div className="cardRichText">
                    <h2 className="cardTitle gradient-title">Titre du projet</h2>
                    <h3 className="cardSubtitle">Subtitle</h3>                     
                </div>
                <div className="cardContainerImage">
                    <img className="cardImg" src="./img/nisaa-header.jpg" alt="femme souriante prennant soin d'elle"/>
                </div>
            </div>           
        </div>
    );
};

export default CardProject;