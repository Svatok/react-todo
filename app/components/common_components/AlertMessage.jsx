import React, {Component} from 'react';
import { Alert } from 'react-bootstrap';

class AlertMessage extends Component {
  componentDidMount() {
    setTimeout(() => { this.props.onDismiss(); }, 7000);
  }

  render() {
    return (
      <Alert
        bsStyle={this.props.bsStyle}
        onDismiss={this.props.onDismiss}
        className="alert-message"
      >
        <p>{this.props.message}</p>
      </Alert>
    );
  }
}

export default AlertMessage;
