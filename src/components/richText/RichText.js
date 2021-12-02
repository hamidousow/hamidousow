import React from 'react';

const RichText = (props) => {    

    return (
        <>
            <div className="leftContent">                
                {/* <p className="text">{props.text}</p> */}
                {props.children}
            </div>
            {/* <div className="rightContent">
                <img className="ImgContent" alt={props.alt}/>
            </div>*/}
        </>
    );
};

export default RichText;