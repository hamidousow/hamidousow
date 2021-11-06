import React from 'react';
import CardProject from '../CardProject/CardProject';
import cardData from '../CardProject/cardData.json';

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