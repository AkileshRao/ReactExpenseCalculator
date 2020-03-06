import React, { useState, useEffect } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { useField } from "formik";


const MyRadioGroup = ({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: 'radio' });
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  }

  // useEffect(() => {
  //   console.log(selectedValue);
    
  // }, [selectedValue])
  return (
    <div>
      <RadioGroup {...field} {...props}>
        {
          props.options.map((option: any, index: number) => (
            <FormControlLabel key={index} control={<Radio checked={selectedValue === option.value} value={option.value}  onChange={handleChange}/>} label={option.label} />
          ))
        }
      </RadioGroup>
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>

  )
}

export default MyRadioGroup;
