import React from 'react';

const Button = (props) => {
    return (
        <a className="button" href={props.href} mailto={props.mailto}>{props.text}</a>
    );
};

export default Button;