import React from 'react'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { useField } from 'formik';
import './form.scss';
const Input = ({ label, ...props }: any) => {
    //returns formik.getFieldProps() & formik,getFieldMeta()
    const [field, meta] = useField(props);
    return (
        <div>
            <TextField
                label={props.label}
                className="text-input"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
        </div>
    )
}

export default Input;