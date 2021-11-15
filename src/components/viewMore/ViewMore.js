import React from 'react';

const ViewMore = (props) => {
    return (
        <div className="viewMore">
            <h2 className="title bigTitle gradient-title "><a href={props.link}>view online</a></h2>
            <a href={props.link}>
                <figure className="mockup sectionViewOnline" >
                    {props.children}
                </figure>
            </a>                        
        </div>
    );
};

export default ViewMore;