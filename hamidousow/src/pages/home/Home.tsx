import React from 'react';
import { Link } from "react-router-dom";
import Projets from '../../components/projets/Projets';
import Hero from '../../components/hero/Hero';

export default function Home() {
  return (
    <>
      <header id="home">
        <Hero/>
      </header>
      <main>       
        <Projets/>
      </main>
    </>
  )
}
