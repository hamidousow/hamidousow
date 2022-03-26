import React from 'react';
import WrapTitle from '../wrapTitle/WrapTitle';
import Section from '../section/Section';
import experienceData from '../../data/experienceData.json';
import Article from '../article/Article';

const Experience = () => {    
    return (
        <>
        <Section className={"section"} >
                <WrapTitle sectionTitle={"expérience"}/>
                <div className="expContainer" id="experience">
                    {experienceData.map((experienceItems, index) => {
                        return <Article key={experienceItems.key.toString()} newData={experienceItems}/>
                    })}
                </div>                
        </Section>        
        </>
        
    );
};

export default Experience;