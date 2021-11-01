import React from 'react';
import CallToAction from '../callToAction/CallToAction';
import Section from '../section/Section';
import sectionData from "../section/sectionData.json";

const HomeSection = () => {
    return (
        <>
        {sectionData.map((sectionData, index) => {
            return <Section sectionContent={sectionData}/>          
            })}

        <CallToAction/>           
        </>
    );
};

export default HomeSection;