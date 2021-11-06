import React from 'react';
import Nav from "../nav/Nav";
import HeroSection from '../heroSection/HeroSection';
import heroData from '../heroSection/heroData.json';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../Footer/Footer';
import Work from '../work/Work';
import Section from '../components/Section';

const Home = () => {
    return (
        <>
            <Nav/>                        
            <main>
                {heroData.map((heroItems, index) => {
                    return <HeroSection heroContent={heroItems}/>
                })}
                <Section sectionTitle={"about"}>
                    <About/>
                </Section>
                <Section sectionTitle={"work"}>
                    <Work/>                   
                </Section>
                <Section sectionTitle={"contact"}>
                    <Contact/>
                </Section>
                
            </main>
            <Footer/>
        </>
    );
};

export default Home;