import React from 'react';
import { FormControl } from 'react-bootstrap';
import { TextField } from './';

const PasswordField = props => (
  <TextField
    className={props.className}
    type="password"
    {...props}
  >
  </TextField>
);

export default PasswordField;
