import React from 'react';
import RichText from '../richText/RichText';
import Section from '../section/Section';
import WrapTitle from '../wrapTitle/WrapTitle';

const About = () => {
        
    return (
        <Section className={"section"} id={"about"}>
            <WrapTitle sectionTitle={"about"}/>
            <RichText>
                <p className="text">
                Développeur à l’écoute, agile, créatif avec une appétence pour le design.
                </p>
                <br/>
                <p className="text">
                
                Dans le cadre de ma formation de concepteur développeur d’applications, je souhaite intégrer une équipe qui me permettra de monter en compétences à travers des projets enrichissants.
                </p>
                <br/>
                <p className="text">
                Je suis disponible dès le mois d’avril pour un premier stage d’une durée de 6 semaines, avec comme perspective d’intégrer l’entreprise accueillante en contrat de professionnalisation.
                </p>
            </RichText>
        </Section>        
    );
};

export default About;