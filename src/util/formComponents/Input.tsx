import React from 'react'

interface IInputProps {
    name: string;
    title?: string;
    inputType: string;
    value?: string;
    handleChange?: any;
    placeholder?: any
}

const Input: React.FunctionComponent<IInputProps> = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <input
                className="form-control"
                id={props.name}
                name={props.name}
                type={props.inputType}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                {...props}
            />
        </div>
    )
}

export default Input;