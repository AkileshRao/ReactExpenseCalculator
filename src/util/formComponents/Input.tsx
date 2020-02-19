import React from 'react'
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';

interface IInputProps {
    name: string;
    title?: string;
    inputType: string;
    value?: string;
    handleChange?: any;
    placeholder?: any;
    label?: string;
}

const Input: React.FunctionComponent<IInputProps> = (props) => {
    return (
        <div className="form-group">
            <TextField
                label={props.label}
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