import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
} from 'react-bootstrap';

class DialogModal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <a
          className={this.props.className}
          onClick={this.open}
        >
          {this.props.children}
        </a>

        <Modal
          bsSize="sm"
          show={this.state.showModal}
          onHide={this.close}
        >
          <Modal.Header closeButton className="details-header">
            <Modal.Title>{this.props.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="mb-40">
              {this.props.modalText}
            </p>
            <div className="text-right">
              <Button
                onClick={this.props.modalSuccessAction}
                bsStyle="primary"
                className="mr-10 mb-15"
              >
                {this.props.modalConfirmButtonText}
              </Button>
              &nbsp;
              <Button className="mb-15" onClick={this.close}>Cancel</Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

DialogModal.propTypes = {
  className: PropTypes.string,
  modalTitle: PropTypes.string.isRequired,
  modalText: PropTypes.string.isRequired,
  modalConfirmButtonText: PropTypes.string.isRequired,
  modalSuccessAction: PropTypes.func.isRequired
};

DialogModal.defaultProps = {
  className: ''
};

export default DialogModal;
