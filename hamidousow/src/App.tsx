import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes> 
    </div>
  );
}

export default App;
