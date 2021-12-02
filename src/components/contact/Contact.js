import React from 'react';
import Button from '../button/Button';
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
                <Button text={'contact me'} mailto={"hamidou.sow@hotmail.fr"}/>
                <Button text={'cv online'} href={"https://hamidousow.github.io/hamidou-cv-online/"}/>
            </div>            
        </Section>
    );
};

export default Contact;