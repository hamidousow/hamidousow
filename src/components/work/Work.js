import React from 'react';
import CardProject from '../cardProject/CardProject';
import cardData from '../cardProject/cardData.json';

const Work = () => {
    return (
        <div className="containerCards">
            {cardData.map((cardItem, index) => {
                return <CardProject cardContent={cardItem}/>
            })}
        </div>
    );
};

export default Work;