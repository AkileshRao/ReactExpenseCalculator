import React from "react";
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { useField } from "formik";
import './form.scss';
const Radio = ({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: 'radio' });

  return (
    <div>
      <ChoiceGroup
        label={props.label}
        className='radio'
        type="radio"
        // selectedKey
        defaultSelectedKey="expense"
        {...field}
        {...props} 
        />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  )
}

export default Radio;
