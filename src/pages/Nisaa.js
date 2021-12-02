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
import background from '../images/nisaa-header.jpg';
import Footer from '../components/footer/Footer';
import ViewMore from '../components/viewMore/ViewMore';
import Card from '../components/card/Card';
//import cardData from '../components/cardProject/cardData.json';

const Nisaa = () => {
    return (
        <>
        <Nav/>
        <Header title={nisaaData.header.title.text}
                subtitle={nisaaData.header.subtitle.text}                
                alt={nisaaData.header.image.alt}               
                background={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
        <Section className={"section intro"} sectionTitle={nisaaData.richText.title}> 
            <RichText text={nisaaData.richText.text}/>
        </Section>
        <Section className={"section"}>
            <ViewMore link={"./"} source={nisaaData.header.image.source}>
                <img alt="hero section Nisaabox" src={nisaaBoxDesktop}/>
            </ViewMore>
        </Section>
        <Section className={"section sectionMockup"}>            
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
        <Section className={"section nextProject"}>            
            <h2 className="bigTitle" style={{marginBottom: "1em"}}>next project</h2>
            <Card number={"01"}
                title={"titre prochain"}
                subtitle = {"sous titre"}
                cardLink = {"#"}
                source={"./img/miae-header.jpg"}
                alt = {"alt"}/> 
                
                <span style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {/* <a className="smallTitle" href="#" style={{width: 'fit-content'}}>all projects</a> */}
                </span>            
        </Section>         
        <Footer/>
        </>
        
    );
};

export default Nisaa;