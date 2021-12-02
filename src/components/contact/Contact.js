import React from 'react';
import Button from '../button/Button';
import RichText from '../richText/RichText';
import WrapTitle from '../wrapTitle/WrapTitle';
import Section from '../section/Section';
import ButtonMailto from '../btnMailto/ButtonMailto';

const Contact = () => {
    return (
        <Section className={"section"} id={"contact"}>
            <WrapTitle sectionTitle={"contact"} />
            <RichText>
                <p className="text">
                    I'm available now, if you search an ambitious and creative web developer
                </p>
            </RichText>

            <div className="containerButton">
                {/* <Button text={'contact me'} mailto={"hamidou.sow@hotmail.fr"}/> */}
                <ButtonMailto className="button" 
                                text="contact me" 
                                mailto="mailto:hamidou.sow@hotmail.fr"/>
                <Button text={'cv online'} href={"https://hamidousow.github.io/hamidou-cv-online/"}/>
            </div>            
        </Section>
    );
};

export default Contact;