import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
} from 'react-bootstrap';

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
                  <input className="form-control" type="text"/>
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
                <div className="row vertical-align coment-bottom-border">
                  <div className="col-md-1 text-right">
                    <a>
                      <i className="fa fa-times"></i>
                    </a>
                  </div>
                  <div className="col-md-8 comment-text">
                    First comment
                  </div>
                  <div className="col-md-3 text-center">
                    <span>&nbsp;</span>
                    <a className="attachment-button attachment-download" href="http://res.cloudinary.com/svatok/raw/upload/v1497567677/wxrcf7icc1ybkwydbddg">
                      <i className="fa fa-paperclip"></i>
                    </a>
                  </div>
                </div>
                <div className="row vertical-align no-comments">
                  <div className="col-md-12 comment-text">No comments.</div>
                </div>
              </div>
            </div>
            <div className="row add-comment">
              <div className="col-md-12">
                <h4 className="details-block-name">Add Comment:</h4>
                <span></span>
                <form>
                  <div className="col-xs-9">
                    <textarea className="form-control" name="commentText" placeholder="Your comment text ..." required></textarea>
                  </div>
                  <div className="col-xs-3 text-center comment-buttons">
                    <div className="row">
                      <a className="attachment-button">
                        Attach File
                        <i className="fa fa-save"></i>
                      </a>
                      <a className="attachment-button">
                        Remove File
                        <i className="fa fa-times"></i>
                      </a>
                    </div>
                    <div className="row">
                      <button className="btn btn-primary" type="submit">
                        Add Comment
                        <i className="fa fa-plus-square-o"></i>
                      </button>
                    </div>
                  </div>
                </form>
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
