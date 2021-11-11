import React from 'react';

const Section = (props) => {
    return (
        <section className="section">
            <div className="content">
                <div className="wrapTitles">
                    <h1 className="bigTitle gradient-title">{props.sectionTitle}</h1>
                    <span className="bigOutlineTitle outlines">{props.sectionTitle}</span>
                </div>
                <div className="wrapContent">
                {props.children}
                </div>
            </div>
        </section>
    );
};

export default Section;