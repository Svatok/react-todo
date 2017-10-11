import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'react-bootstrap';
import AlertMessage from '../AlertMessage';

const TextField = ({
  autoComplete,
  className,
  input,
  label,
  name,
  placeholder,
  type,
  meta: { touched, error },
  children,
  errorMessageType,
  clearError
}) => (
  <div className={className}>
    { label && <ControlLabel>{label}</ControlLabel>}
    <input
      autoComplete={autoComplete}
      className="form-control"
      name={name}
      placeholder={placeholder}
      type={type}
      {...input}
    />
    { touched && error &&
        <AlertMessage
          message={error}
          bsStyle="danger"
          onDismiss={this.props.clearError}
        />
    }
    { children }
  </div>
);

TextField.defaultProps = {
  type: 'text',
  errorMessageType: 'help-block'
};

TextField.propTypes = {
  type: PropTypes.string
};

export default TextField;
