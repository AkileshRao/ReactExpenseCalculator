import React from 'react'
import { useField } from 'formik';
import './form.scss';
import { TextField } from '@material-ui/core';

const MyInput = (props: any) => {
    const [fieldInput, metaInput] = useField(props);
    return (
        <div>
            <TextField {...fieldInput} {...props} className='text-input' label={props.label} variant="outlined" />
            {metaInput.touched && metaInput.error ? (<div className="error">{metaInput.error}</div>) : null}
        </div>
    )
}

const MyTextarea = ({ label, ...props }: any) => {
    const [fieldTextarea, metaTextarea] = useField(props);
    return (
        <div>
            <TextField {...fieldTextarea} {...props} multiline rows="2" className='text-input' label={props.label} variant="outlined" />
            {metaTextarea.touched && metaTextarea.error ? (<div className="error">{metaTextarea.error}</div>) : null}
        </div>
    )
}

export { MyInput, MyTextarea };