import React from 'react';
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from './pages/NotFound';

import Work from './components/work/Work';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';

import HeroSection from './components/heroSection/HeroSection';
import Footer from './components/footer/Footer';

const App = () => {
  return (
      <div className="App">
        <Nav/>
        <HeroSection/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
  );
};

export default App;
