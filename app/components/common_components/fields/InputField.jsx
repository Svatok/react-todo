import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup, ControlLabel } from 'react-bootstrap';

const InputField = ({
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
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <input
      autoComplete={autoComplete}
      className={classNames('form-control', className)}
      name={name}
      placeholder={placeholder}
      type={type}
      {...input}
    />
    {touched && error && <span className="help-block">{error}</span>}
    { children }
  </FormGroup>
);

InputField.defaultProps = {
  type: 'text'
};

InputField.propTypes = {
  type: PropTypes.string
};

export default InputField;
