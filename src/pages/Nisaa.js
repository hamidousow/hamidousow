import React from 'react';
import Nav from '../components/nav/Nav';
import Header from '../components/header/Header';
import { nisaaData } from '../data/nisaaData';
import Section from '../components/section/Section';
import RichText from '../components/richText/RichText';
import nisaaBoxDesktop  from '../images/nisaaDesktop.jpg';
import nisaaFullOne  from '../images/nisaaFullOne.jpg';
import nisaaFullTwo  from '../images/nisaaFullTwo.jpg';
import nissaMobile  from '../images/nissaMobile.jpg';
//import CardProject from '../components/cardProject/CardProject';
import Footer from '../components/footer/Footer';


const Nisaa = () => {
    return (
        <>
        <Nav/>
        <Header title={nisaaData.header.title.text}
                subtitle={nisaaData.header.subtitle.text}                
                alt={nisaaData.header.image.alt}    
                className={nisaaData.header.image.className}/>
        <Section className={"section"} sectionTitle={nisaaData.richText.title}> 
            <RichText text={nisaaData.richText.text} />
        </Section>
        <Section className={"section sectionMockup"}>
            <figure className="mockup">
                <img alt="hero section Nisaabox" src={nisaaBoxDesktop}/>
            </figure>
            <figure className="mockup mockupFull">
                <img alt="maquette format desktop partie 1/2" src={nisaaFullOne}/>
                <img alt="maquette format desktop partie 2/2" src={nisaaFullTwo}/>                
            </figure>
            <figure className="mockup mockupMobile">
                <img alt="mobile mockup" src={nissaMobile}/>
                <img alt="mobile mockup" src={nissaMobile}/>
                <img alt="mobile mockup" src={nissaMobile}/>
            </figure>            
        </Section>
        <Section className={"section sectionMoreDetails"}>
            <h2 className="smallTitle">more details</h2>
            <div className="link">
                <a className="" href="">intagram</a>
            </div>
        </Section>

        <Section className={"section"}>
            <div className="content">
                <h2 className="bigTitle">next project</h2>
            </div>
            {/* <CardProject/> */}
        </Section>
        <Footer/>
        </>
        
    );
};

export default Nisaa;