import React from 'react';

const RichText = (props) => {
    return (
        <>
        <div className="leftContent">
            <p className="text">{props.text}</p>
        </div>
        <div className="rightContent">
            <img className="ImgContent"/>
        </div>
        {props.children}
        </>
    );
};

export default RichText;