import React from 'react';
import RichText from '../richText/RichText';
import Section from '../section/Section';
import WrapTitle from '../wrapTitle/WrapTitle';
import { aboutData } from './aboutData';

const About = () => {
    
    return (
        <Section className={"section"} id={"about"}>
            <WrapTitle sectionTitle={"about"}/>
            <RichText text={aboutData.text}/>
        </Section>        
    );
};

export default About;