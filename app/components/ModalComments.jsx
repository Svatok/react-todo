import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
} from 'react-bootstrap';
import CommentItem from './CommentItem';

class ModalComments extends Component {
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
          className="comment"
          onClick={this.open}
        />

        <Modal
          show={this.state.showModal}
          onHide={this.close}
        >
          <Modal.Header className="details-header" closeButton>
            Task comments:
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-7">
                <h4 className="details-block-name">Deadline:</h4>
                <p className="input-group">
                  <input className="form-control" type="text" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" ng-click="im.open($event)" type="button">
                      <i className="glyphicon glyphicon-calendar"></i>
                    </button>
                  </span>
                </p>
              </div>
            </div>
            <div className="row comments">
              <div className="col-md-12">
                <h4 className="details-block-name">Comments:</h4>
                {
                  this.props.comments ?
                  Object.keys(this.props.comments).map(id =>
                    <CommentItem {...this.props.comments[id]} key={id} />
                  )
                  :
                  <div className="row vertical-align no-comments">
                    <div className="col-md-12 comment-text">No comments.</div>
                  </div>
                }
              </div>
            </div>

          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

ModalComments.propTypes = {
  // className: PropTypes.string,
  // modalShowButtonText: PropTypes.string.isRequired,
  // modalTitle: PropTypes.string.isRequired,
  // modalText: PropTypes.string.isRequired,
  // modalConfirmButtonText: PropTypes.string.isRequired,
  // modalSuccessAction: PropTypes.func.isRequired
};

ModalComments.defaultProps = {
  // className: 'item-action__handler',
  // modalSuccessAction: () => null
};

export default ModalComments;
