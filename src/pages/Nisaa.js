import React from 'react';
import Nav from '../components/nav/Nav';
import Header from '../components/header/Header';
import { nisaaData } from '../data/nisaaData';
import Section from '../components/section/Section';
import RichText from '../components/richText/RichText';
import nisaaBoxDesktop  from '../images/nisaaDesktop.jpg';
import nisaaFullOne  from '../images/nisaaFullOne.jpg';
import nisaaFullTwo  from '../images/nisaaFullTwo.jpg';


const Nisaa = () => {
    return (
        <>
        <Nav/>
        <Header title={nisaaData.header.title.text}
                subtitle={nisaaData.header.subtitle.text}
                
                alt={nisaaData.header.image.alt}    
                className={nisaaData.header.image.className}/>
        <Section sectionTitle={nisaaData.richText.title}> 
            <RichText text={nisaaData.richText.text} />
        </Section>
        <section className="section sectionMockup">
            <figure className="mockup">
                <img alt="hero section Nisaabox" src={nisaaBoxDesktop}/>
            </figure>
            <figure className="mockup mockupFull">
                <img alt="maquette format desktop partie 1/2" src={nisaaFullOne}/>
                <img alt="maquette format desktop partie 1/2" src={nisaaFullTwo}/>                
            </figure>
            <figure className="mockup">
                <img alt="maquette format desktop partie 1/2" src="#"/>
                <img alt="maquette format desktop partie 2/2" src="#"/>
                <img alt="maquette format desktop partie 2/2" src="#"/>
            </figure>
        </section>
        </>
        
    );
};

export default Nisaa;