import React from 'react';
import { TextField } from './';

const PasswordField = props => (
  <TextField
    className={props.className}
    type="password"
    {...props}
  />
);

export default PasswordField;
