import React from "react";

interface ITextareaProps {
  title: string;
  name: string;
  rows?: number;
  cols?: number;
  value?: string;
  handleChange?: any;
  placeholder?: string;
}

const TextArea: React.FunctionComponent<ITextareaProps> = props => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
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
