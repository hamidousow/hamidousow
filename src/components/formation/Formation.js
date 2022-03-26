import React from 'react';
import WrapTitle from '../wrapTitle/WrapTitle';
import Section from '../section/Section';
import formationData from '../../data/formationData';
import Article from '../article/Article';

const Formation = () => {    
    return (
        <>
        <Section className={"section"} id={"formation"}>
                <WrapTitle sectionTitle={"formation"}/>
                <div className="expContainer">
                    {formationData.map((formationItems, index) => {
                        return <Article key={formationItems.key.toString()} newData={formationItems}/>
                    })}
                </div>                
        </Section>        
        </>
        
    );
};

export default Formation;