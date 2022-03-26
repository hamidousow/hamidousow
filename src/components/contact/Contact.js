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
                    Des questions ? Contactez moi, je suis disponible.
                </p>
            </RichText>

            <div className="containerButton">                
                <ButtonMailto className="button" 
                                text="me contacter" 
                                mailto="mailto:hamidou.sow@hotmail.fr"/>
                {/* <Button text={'cv online'} href={"https://hamidousow.github.io/hamidou-cv-online/"}/> */}
            </div>            
        </Section>
    );
};

export default Contact;