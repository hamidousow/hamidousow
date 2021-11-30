import React from 'react';

const Button = (props) => {
    return (
        <a className="button" href={props.href}>{props.text}</a>
    );
};

export default Button;