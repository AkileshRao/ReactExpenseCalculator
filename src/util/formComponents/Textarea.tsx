import React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";

interface ITextareaProps {
  title: string;
  name: string;
  rows?: number;
  cols?: number;
  value?: string;
  handleChange?: any;
  placeholder?: string;
  label?: string;
}

const TextArea: React.FunctionComponent<ITextareaProps> = props => (
  <div className="form-group">
    <TextField
      multiline
      label={props.label}
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextArea;
