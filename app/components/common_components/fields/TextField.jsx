import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel } from 'react-bootstrap';

const TextField = ({
  autoComplete,
  className,
  input,
  label,
  name,
  placeholder,
  type,
  meta: { touched, error },
  children
}) => (
  <FormGroup className={className}>
    { label && <ControlLabel>{label}</ControlLabel>}
    <input
      autoComplete={autoComplete}
      className="form-control"
      name={name}
      placeholder={placeholder}
      type={type}
      {...input}
    />
    {touched && error && <span className="help-block">{error}</span>}
    { children }
  </FormGroup>
);

TextField.defaultProps = {
  type: 'text'
};

TextField.propTypes = {
  type: PropTypes.string
};

export default TextField;
