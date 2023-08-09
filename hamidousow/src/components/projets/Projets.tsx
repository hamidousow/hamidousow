import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import { Projet } from '../../models/Projet';

// let options = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json;',
//         'Authorization': '*'
//     },
// }

const urlRepos = 'https://api.github.com/users/hamidousow/repos';

export default function Projets() {

    const [projets, setProjets] = useState([]);


    const getData = () => {
        fetch(urlRepos)
        .then((result) => { return result.json() })
        .then((json) => {
            setProjets(json)
        })
    }

    useEffect(() => {        
        getData() 
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])   

    return (
    <>    
        <section id="projets" className='container position-relative'>
            <div className='container-title position-sticky top-50 z-1'>
                <h2 className='text-uppercase display-1 big-title text-start outline-text'>projets</h2>
            </div>
            <div className="projets_container">
                <div id="container-cards-projects" className='container-cards d-flex flex-column align-items-end gap-5 my-5'>
                    {projets.map((projet: Projet) => projet.name === 'hamidousow' ? '' : (
                        <Card 
                        key={projet.id}
                        name={projet.name}
                        imgSrc={projet.imgSrc}                        
                        />
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}


