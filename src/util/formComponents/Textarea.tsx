import React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { useField } from "formik";
import './form.scss';
const TextArea = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <TextField
        multiline
        label={props.label}
        className="form-control"
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  )
}




export default TextArea;
