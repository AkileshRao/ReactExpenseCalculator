import React from "react";
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

interface ICheckboxProps {
  name: string;
  title: string;
  options: any[];
  onChange?: any;
  selectedOptions?: any;
  label?: string;
}



const CheckBox: React.FunctionComponent<ICheckboxProps> = props => {
  return (
    <ChoiceGroup
      label={props.label}
      defaultSelectedKey="day"
      options={props.options} />
  )
}

export default CheckBox;
