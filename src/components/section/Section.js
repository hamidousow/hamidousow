import React from 'react';


const Section = (props) => {
    return (
        <section className={props.className}>            
            <div className="content">
                {props.children}               
            </div>
        </section>
    );
};

export default Section;