import React from 'react';

const Button = (props) => {
    return (
        <button
            className={props.type === "submit" ? "btn btn-submit" : "btn btn-cancel"}
            onClick={props.action}>
            {props.type === "submit" ? "Submit" : "Cancel"}
        </button>
    );
};

export default Button;