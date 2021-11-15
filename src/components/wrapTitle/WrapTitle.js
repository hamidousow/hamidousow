import React from 'react';
import BigTitle from '../bigTitle/BigTitle';

const WrapTitle = (props) => {
    return (
        <div className="wrapTitles">
            <h1 className="bigTitle gradient-title">{props.sectionTitle}</h1>
            <span className="bigOutlineTitle outlines">{props.sectionTitle}</span>
        </div>
    );
};

export default WrapTitle;
