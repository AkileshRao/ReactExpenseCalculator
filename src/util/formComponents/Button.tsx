import React from 'react';

interface IButtonParams {
    type?: string;
    action: any;
}

const Button: React.FunctionComponent<IButtonParams> = (props) => {
    return (
        <button
            className={props.type === "submit" ? "btn btn-submit" : "btn btn-cancel"}
            onClick={props.action}>
            {props.type === "submit" ? "Submit" : "Cancel"}
        </button>
    );
};

export default Button;