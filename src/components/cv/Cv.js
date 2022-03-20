import React from 'react';
import WrapTitle from '../wrapTitle/WrapTitle';
import Section from '../section/Section';
import cvData from '../../data/cvData.json';
import Article from '../article/Article';

const Cv = () => {    
    return (
        <>
        <Section className={"section"} id={"about"}>
                <WrapTitle sectionTitle={"formation"}/>
                {cvData.map((cvItems, index) => {
                    return <Article cvData={cvItems}/>
                })}
        </Section>        
        </>
        
    );
};

export default Cv;