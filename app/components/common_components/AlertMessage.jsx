import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertMessage = ({message, bsStyle, onDismiss}) => (
  <Alert bsStyle={bsStyle} onDismiss={onDismiss} className="alert-message" timeout={60}>
    <p>{message}</p>
  </Alert>
);

export default AlertMessage;
