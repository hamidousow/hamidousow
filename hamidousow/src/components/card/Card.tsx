import React from 'react';
import { Link } from "react-router-dom";



const Card: any = (props : { id: number, name: string, imgSrc: string}) => {

    //props.imgSrc = `${dir_path}/${props.name}.jpg`;

    console.log('nom de la prop : ' + props.name)
    return (  
        <>
        <div className='card' data-component="card" key={props.id}>
            <Link to={`/projets/${props.name}`} target="_parent" rel="noopener noreferrer">
                <div className='card-body'>
                    <h3 className='cardTitle} cardTitlePosition'>{props.name}</h3>
                    <div className='imgItemGradient imgGradient'>
                        <img className='card-img' src={props.imgSrc} alt='projet'/>                         
                    </div> 
                </div> 
            </Link>            
        </div>
        </>
    )
}

export default Card;
