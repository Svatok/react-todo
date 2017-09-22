import React from 'react';
import { FormControl } from 'react-bootstrap';
import { InputField } from './';

const PasswordField = props => (
  <InputField
    className="mb-5"
    type="password"
    {...props}
  >
  </InputField>
);

export default PasswordField;
