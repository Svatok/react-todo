import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

const TextAreaField = ({
  input,
  label,
  name,
  placeholder,
  meta: { touched, error },
  children,
  rows
}) => (
  <FormGroup className={touched && error && 'has-error'}>
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
