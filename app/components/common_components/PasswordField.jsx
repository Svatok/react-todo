import React from 'react';
import { FormControl } from 'react-bootstrap';
import { InputField } from './';

const PasswordField = props => (
  <InputField
    className="mb-5"
    type="password"
    {...props}
  >
    <FormControl.Feedback>
      <button type="button" className="input-icon-active">
        <i className="icon icon-eye-cross font-18 in-grey-400" />
      </button>
    </FormControl.Feedback>
  </InputField>
);

export default PasswordField;
