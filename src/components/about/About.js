import React from 'react';
import RichText from '../richText/RichText';
import Section from '../section/Section';
import WrapTitle from '../wrapTitle/WrapTitle';

const About = () => {
        
    return (
        <Section className={"section"} id={"about"}>
            <WrapTitle sectionTitle={"about"}/>
            <RichText>
                <p className="text">
                My name is Hamidou SOW, I am a web designer and junior front-end developer. I discovered web development through my experience in web design by integrating my creations. Web development quickly became a passion and a voice to follow for the rest of my professional project.
                </p>
                <br/>
                <p className="text">
                Learning at Simplon, throughout this training I had the chance to work on various projects, alone or in teams with the agile method. It was an opportunity to discover new technologies like Sass and React.js, and improve my workteam knowledge.
                </p>
                <br/>
                <p className="text">
                Curious and creative, I aspire to make web development my job, work in kindness team, to learn and share our knowledge.
                </p>
            </RichText>
        </Section>        
    );
};

export default About;