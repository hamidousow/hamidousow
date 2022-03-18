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
<<<<<<< HEAD
                Développeur à l’écoute, agile, créatif avec une appétence pour le design.
                </p>
                <br/>
                <p className="text">
                
                Dans le cadre de ma formation de concepteur développeur d’applications, je souhaite intégrer une équipe qui me permettra de monter en compétences à travers des projets enrichissants.
                </p>
                <br/>
                <p className="text">
                Je suis disponible dès le mois d’avril pour un premier stage d’une durée de 6 semaines, avec comme perspective d’intégrer l’entreprise accueillante en contrat de professionnalisation.
=======
                    Développeur à l’écoute, agile, créatif avec une appétence pour le design.
                </p>
                <br/>
                <p className="text">
                    Dans le cadre de ma formation de concepteur développeur d’applications, je souhaite intégrer une équipe qui me permettra de monter en compétences à travers des projets enrichissants.
                </p>
                <br/>
                <p className="text">
                    Je suis disponible dès le mois d’avril pour un premier stage d’une durée de 6 semaines, avec comme perspective d’intégrer l’entreprise accueillante en contrat de professionnalisation.
>>>>>>> 89e915576560ad93c6556621447415af1199fc64
                </p>
            </RichText>
        </Section>        
    );
};

export default About;