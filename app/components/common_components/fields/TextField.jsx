import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'react-bootstrap';

const TextField = ({
  autoComplete,
  input,
  label,
  name,
  placeholder,
  type,
  meta: { touched, error },
  children
}) => (
  <div className={touched && error && 'has-error'}>
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
  </div>
);

TextField.defaultProps = {
  type: 'text'
};

TextField.propTypes = {
  type: PropTypes.string
};

export default TextField;
