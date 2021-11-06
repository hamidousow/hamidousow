import React from 'react';
import Button from '../button/Button';
import buttonData from '../button/buttonData.json';
import RichText from '../components/RichText';
import { contactData } from '../contact/contactData';

const Contact = () => {
    return (
        <>
        <RichText text={contactData.text}/>
        <div className="containerButton">
            {buttonData.map((buttonItems, index) => {
                return <Button buttonContent={buttonItems}/>
            })} 
        </div>
        </>
    );
};

export default Contact;