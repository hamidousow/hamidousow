import React, { Component } from 'react';

class CardProject extends Component {
    render() {
        const { cardContent } = this.props;
        return (        
            <div className="card" data-component="card">            
                <div className="cardContent">
                    <p className={cardContent.content.cardNumber.className}>
                        {cardContent.content.cardNumber.number}
                    </p>                
                    <div className="cardRichText">
                        <h2 className={cardContent.content.cardTitle.className}>
                            <a href={cardContent.content.cardLink} target="_blank" rel="noreferrer">
                            {cardContent.content.cardTitle.text}
                            </a>
                        </h2>
                        <h3 className={cardContent.content.cardSubtitle.className}>
                            <a href={cardContent.content.cardLink} target="_blank" rel="noreferrer">
                            {cardContent.content.cardSubtitle.text}
                            </a>
                        </h3>                     
                    </div>
                    <a href={cardContent.content.cardLink} className="blockLink" target="_blank" rel="noreferrer">
                        <div className="cardContainerImage">
                            <img className={cardContent.content.cardImg.className} src={cardContent.content.cardImg.source} alt={cardContent.content.cardImg.alt}/>
                        </div>
                    </a>
                </div>           
            </div>
        );
    }
};

export default CardProject;