import React from 'react';

import Section from '../section/Section';
import WrapTitle from '../wrapTitle/WrapTitle';
import outilsData from "../../data/outilsData.json";
//import logo from '../../images/Git-logo.svg';

const Outils = () => {
    return (
        <Section className={"section"} id={"outils"}>
            <WrapTitle sectionTitle={"outils"}/>
            <div className="containerIcon">
                {outilsData.map((outilsItem, index) => {
                    return(
                        
                            <div id={outilsItem.id} className="iconContainer">
                                <img src={outilsItem.src} className="iconImage" alt={outilsItem.alt} />
                                {/* <h3 className="text iconTitle">{outilsItem.title}</h3> */}
                            </div>                            
                        
                    )
                })}  
            </div>                                  
        </Section>
    );
};

export default Outils;