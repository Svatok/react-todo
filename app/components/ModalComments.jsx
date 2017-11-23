import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DateTime from 'react-datetime';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { fetchComments, removeComment } from '../actions/comments';
import { editTask } from '../actions/tasks';
import CommentItem from './CommentItem';
import NewCommentForm from './forms/comment/NewCommentForm';

class ModalComments extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.changeDeadline = this.changeDeadline.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.props.fetchComments(this.props.mainData.projectId, this.props.mainData.id);
    this.setState({ showModal: true });
  }

  changeDeadline(deadline) {
    this.props.editTask({
      ...this.props.mainData,
      deadline
    });
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
            Task details:
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-7">
                <h4 className="details-block-name">Deadline:</h4>
                <p className="input-group">
                  <DateTime
                    defaultValue={this.props.mainData.deadline ? moment(this.props.mainData.deadline).format('MM/DD/YYYY h:mm') : ''}
                    inputProps={{name: 'deadline', ref: (input) => { this.deadline = input; }}}
                    onBlur={deadline => this.changeDeadline(deadline)}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={() => this.deadline.focus()}>
                      <i className="glyphicon glyphicon-calendar" />
                    </button>
                  </span>
                </p>
              </div>
            </div>
            <div className="row comments">
              <div className="col-md-12">
                <h4 className="details-block-name">Comments:</h4>
                {
                  Object.keys(this.props.comments).length > 0 ?
                  Object.keys(this.props.comments).map(id =>
                    <CommentItem
                      {...this.props.comments[id]}
                      key={id}
                      remove={() => this.props.removeComment(this.props.projectId, this.props.taskId, id)}
                    />
                  )
                  :
                  <div className="row vertical-align no-comments">
                    <div className="col-md-12 comment-text">No comments.</div>
                  </div>
                }
              </div>
            </div>
            <NewCommentForm taskId={this.props.taskId} projectId={this.props.projectId} />
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

const mapDispatchToProps = {
  fetchComments,
  removeComment,
  editTask
};

const mapStateToProps = state => ({
  comments: state.comments.list
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalComments);
