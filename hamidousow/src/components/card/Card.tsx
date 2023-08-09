import React from 'react';
import { Link } from "react-router-dom";


const Card: any = (props : { id: number, name: string}) => {

    let imgSrc = `./images/${props.name}.jpg`;

    return (  
        <>
        <div className='card' data-component="card" key={props.id}>
            <Link to={`/projets/${props.name}`} target="_parent" rel="noopener noreferrer">
                <div className='card-body position-relative p-0'>
                    <h3 className='text-uppercase card-title'>{props.name}</h3>
                    <div className='container-img'>
                        <img className='card-img' src={imgSrc} alt='projet'/>                         
                    </div> 
                </div> 
            </Link>            
        </div>
        </>
    )
}

export default Card;
