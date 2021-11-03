import React from 'react';
import Nav from "../nav/Nav";
import HeroSection from '../heroSection/HeroSection';
import heroData from '../heroSection/heroData.json';
import Section from '../section/Section';
import sectionData from '../section/sectionData.json';
import CardProject from '../CardProject/CardProject';
import cardData from '../CardProject/cardData.json';
import Contact from '../contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Nav/>
            {heroData.map((heroItems, index) => {
                return <HeroSection heroContent={heroItems}/>
            })}            
            {sectionData.map((sectionItems, index)=> {
                return <Section sectionContent={sectionItems}/>
            })}
            <section className="section">
                <div className="containerCards">
                    {cardData.map((cardItem, index) => {
                        return <CardProject cardContent={cardItem}/>
                    })}                    
                </div>
            </section>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;