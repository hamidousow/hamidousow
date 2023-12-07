import React, { useEffect, useState } from 'react';
import RoundButton from '../../components/cta-btn/RoundButton'
import { useParams } from 'react-router-dom';

export default function Projet() {

    const params = useParams();
    const urlRepo = `https://api.github.com/repos/hamidousow/${params.projetName}`;
    const [projet , setProjet]: any = useState([]);

    const getData = () => {
        fetch(urlRepo)
        .then((result) => { return result.json() })
        .then((json) => {
            setProjet(json)
        })
    }

    useEffect(() => {        
        getData() 
        
    }, [])  


    return (
        <>
        <header>
            <div className='container'>

                <div className="hero-right">
                    <img src="" alt="" />
                </div>
                <div className="hero-left">
                    <div className="wrap-text d-flex flex-column gap-3">
                        <h1> {projet['name']} </h1>
                        <p> {projet['description']} </p>
                        <a href={projet['html_url']} >{projet['html_url']}</a>                      
                    </div>
                </div>
                <RoundButton link={"projet"}/>
            </div>
        </header>
        </>
    )
}
