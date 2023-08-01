import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
    <div className="container d-flex hero flex-column justify-content-end py-5">
        <h1 className='text-uppercase display-1 big-title text-start'>Développeur
            <br />
            <span className='outline-text'> fullstack </span>
        </h1>
        <div className="container-button d-flex justify-content-end">
            <Link className="hero-cta d-flex justify-content-center align-items-center" to='/projets'>↓</Link> 
        </div>
    </div>
    </>
  )
}
