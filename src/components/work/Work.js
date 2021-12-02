import React from 'react';
import CardProject from '../cardProject/CardProject';
import cardData from '../cardProject/cardData.json';
import Section from '../section/Section';
import WrapTitle from '../wrapTitle/WrapTitle';

const Work = () => {
    return (
        <Section className={"section"} id={"work"}>
            <WrapTitle sectionTitle={"work"}/>
            <div className="containerCards">
                {cardData.map((cardItem, index) => {
                    return <CardProject key={cardItem.id} cardContent={cardItem}/>
                })}
            </div>                  
        </Section>        
    );
};

export default Work;