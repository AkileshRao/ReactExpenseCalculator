import React from 'react';

interface IButtonParams {
    type?: string;
    action: any;
    value: string;
}

const Button: React.FunctionComponent<IButtonParams> = (props) => {
    return (
        <button
            className={props.type === "submit" ? "btn btn-submit" : "btn btn-cancel"}
            onClick={props.action}>
            {props.value}
        </button>
    );
};

export default Button;