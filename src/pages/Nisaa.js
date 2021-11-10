import React from 'react';
import Nav from '../components/nav/Nav';
import Header from '../components/header/Header';
import { nisaaData } from '../data/nisaaData';
import Section from '../components/section/Section';
import RichText from '../components/richText/RichText';

const Nisaa = () => {
    return (
        <>
        <Nav/>
        <Header title={nisaaData.header.title.text}
                subtitle={nisaaData.header.subtitle.text}
                image={nisaaData.header.image.source}
                alt={nisaaData.header.image.alt}    
                className={nisaaData.header.image.className}/>
        <Section> 
            <RichText />
        </Section>
        </>
        
    );
};

export default Nisaa;