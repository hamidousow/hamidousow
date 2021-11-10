import React from 'react';
import Nav from "../components/nav/Nav";
import HeroSection from '../components/heroSection/HeroSection';
import heroData from '../components/heroSection/heroData.json';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Work from '../components/work/Work';
import Section from '../components/section/Section';

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