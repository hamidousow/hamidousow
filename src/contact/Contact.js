import React from 'react';
import Button from '../button/Button';
import buttonData from '../button/buttonData.json';

const Contact = () => {
    return (
        <section className="section">
            <div className="containerButton">
            {buttonData.map((buttonItems, index) => {
                return <Button buttonContent={buttonItems}/>
            })} 
            </div>
        </section>
    );
};

export default Contact;