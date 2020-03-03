import React from 'react'
import { useField } from 'formik';
import './form.scss';
import { TextField } from '@material-ui/core';

const MyInput = ({ label, ...props }: any) => {
    //returns formik.getFieldProps() & formik,getFieldMeta()
    const [fieldInput, metaInput] = useField(props);
    return (
        <div>
            <TextField {...props} className='text-input' label={props.label} variant="outlined" />
            {metaInput.touched && metaInput.error ? (<div className="error">{metaInput.error}</div>) : null}
        </div>
    )
}

const MyTextarea = ({ label, ...props }: any) => {
    const [fieldTextarea, metaTextarea] = useField(props);
    return (
        <div>
            <TextField {...props} multiline className='text-input' label={props.label} variant="outlined" />
            {metaTextarea.touched && metaTextarea.error ? (<div className="error">{metaTextarea.error}</div>) : null}
        </div>
    )
}

export default { MyInput, MyTextarea };