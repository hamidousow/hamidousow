import React from 'react';
import Button from '../button/Button';
//import buttonData from '../button/buttonData.json';
import RichText from '../richText/RichText';
import { contactData } from '../contact/contactData';
import WrapTitle from '../wrapTitle/WrapTitle';
import Section from '../section/Section';

const Contact = () => {
    return (
        <Section className={"section"} id={"contact"}>
            <WrapTitle sectionTitle={"contact"} />
            <RichText text={contactData.text}/>
            <div className="containerButton">
                <Button text={'cv online'}/>
                <Button text={'hire me'}/>
            </div>            
        </Section>
    );
};

export default Contact;