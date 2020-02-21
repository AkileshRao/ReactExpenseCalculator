import React from "react";
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

interface ICheckboxProps {
  name: string;
  title: string;
  options: any[];
  handleChange?: any;
  selectedOptions?: any;
  label?: string;
  value?: any;
}



const CheckBox: React.FunctionComponent<ICheckboxProps> = props => {
  return (
    <ChoiceGroup
      label={props.label}
      defaultSelectedKey="day"
      options={props.options}
      onChange={props.handleChange}
      value={props.value} />
  )
}

export default CheckBox;
