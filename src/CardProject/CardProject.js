import React from 'react';

const CardProject = () => {
    return (
        <div className="card">
            {/* <span className="projectNumber">01</span> */}
            <div className="cardContent">
                <p className="projectNumber">01</p>                
                <div className="cardRichText">
                    <h2 className="cardTitle">Titre du projet</h2>
                    <h3 className="cardSubtitle">Subtitle</h3>                     
                </div>
                <div className="cardContainerImage"></div>
            </div>
            
            
        </div>
    );
};

export default CardProject;