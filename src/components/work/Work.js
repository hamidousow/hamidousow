import React from 'react';
import CardProject from '../cardProject/CardProject';
import projectData from '../../data/projectData.json';
import Section from '../section/Section';
import WrapTitle from '../wrapTitle/WrapTitle';

const Work = () => {
    return (
        <Section className={"section"} id={"work"}>
            <WrapTitle sectionTitle={"work"}/>
            <div className="containerCards">
                {projectData.map((projectItem, index) => {
                    return <CardProject key={projectItem.id} cardContent={projectItem}/>
                })}
            </div>                  
        </Section>        
    );
};

export default Work;