import React from 'react';
import Work from './components/work/Work';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import HeroSection from './components/heroSection/HeroSection';
import Footer from './components/footer/Footer';
import Formation from './components/formation/Formation';
import Experience from './components/experience/Experience';
import Outils from './components/outils/Outils';

const App = () => {
  return (
      <div className="App">
        <Nav/>
        <HeroSection/>
        <About/>
        <Formation/>
        <Experience/>
        <Outils/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
  );
};

export default App;
