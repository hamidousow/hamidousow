import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Projets from './components/projets/Projets';
import Projet from './pages/projet/Projet';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projets" element={<Projets/>}/>
        <Route path="/projets/:projetName" element={<Projet/>}/>
      </Routes> 
    </div>
  );
}

export default App;
