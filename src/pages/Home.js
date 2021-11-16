import React from 'react';
import Nav from "../components/nav/Nav";
import HeroSection from '../components/heroSection/HeroSection';
//import heroData from '../components/heroSection/heroData.json';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Work from '../components/work/Work';
import Section from '../components/section/Section';
import WrapTitle from '../components/wrapTitle/WrapTitle';

const Home = () => {
    return (
        <>
            <Nav/>           
            <HeroSection/>           
            <main>
                <Section className={"section"}>
                    <WrapTitle sectionTitle={"about"}/>
                    <About/>
                </Section>
                <Section className={"section"}>
                    <WrapTitle sectionTitle={"work"}/>
                    <Work/>                   
                </Section>
                <Section className={"section"}>
                    <WrapTitle sectionTitle={"contact"}/>
                    <Contact/>
                </Section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;