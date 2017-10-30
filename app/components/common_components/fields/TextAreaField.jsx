import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

const TextAreaField = ({
  className,
  input,
  label,
  name,
  placeholder,
  meta: { touched, error },
  children,
  rows
}) => (
  <FormGroup className={className}>
    { label && <ControlLabel>{label}</ControlLabel>}
    <FormControl
      type="text"
      name={name}
      componentClass="textarea"
      placeholder={placeholder}
      {...input}
      rows={rows}
    />
    { touched && error && <span className="help-block">{error}</span>}
    { children }
  </FormGroup>
);

export default TextAreaField;
