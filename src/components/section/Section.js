import React from 'react';


const Section = (props) => {
    return (
        <section id={props.id} className={props.className}>            
            <div className="content">
                {props.children}               
            </div>
        </section>
    );
};

export default Section;