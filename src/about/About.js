import React from 'react';
import RichText from '../components/RichText';
import { aboutData } from './aboutData';

const About = () => {
    // const About = aboutData;
    console.log(aboutData);
    
    return (
        <>
        <RichText text={aboutData.text}/>
        </>
    );
};

export default About;