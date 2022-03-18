import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, text }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
            className="button">
            {text}            
        </Link>
    );
};

export default ButtonMailto;