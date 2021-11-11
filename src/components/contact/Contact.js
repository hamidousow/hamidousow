import React from 'react';
import Button from '../button/Button';
//import buttonData from '../button/buttonData.json';
import RichText from '../richText/RichText';
import { contactData } from '../contact/contactData';

const Contact = () => {
    return (
        <>
        <RichText text={contactData.text}/>
        <div className="containerButton">
            <Button text={'cv online'}/>
            <Button text={'hire me'}/>
        </div>
        </>
    );
};

export default Contact;