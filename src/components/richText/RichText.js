import React from 'react';

const RichText = (props) => {
    return (
        <div className="content">
            <div className="leftContent">
                <p className="text">{props.text}</p>
            </div>
            <div className="rightContent">
                <img className="ImgContent" alt={props.alt}/>
            </div>
            {/* {props.children} */}
        </div>
    );
};

export default RichText;