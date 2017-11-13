import React from 'react';
import DialogModal from './DialogModal';

const CommentItem = props => (
  <div className="row vertical-align coment-bottom-border">
    <div className="col-md-1 text-right">
      <DialogModal
        className="remove-comment"
        modalTitle="Delete comment"
        modalText="Are you sure you want to delete the comment?"
        modalConfirmButtonText="Yes, delete comment"
        modalSuccessAction={props.remove}
      >
        <i className="glyphicon glyphicon-remove text-danger" />
      </DialogModal>
    </div>
    <div className="col-md-8 comment-text">
      {props.comment_text}
    </div>
    <div className="col-md-3 text-center">
      <span>&nbsp;</span>
      { props.attachment && props.attachment.url &&
        <a href={props.attachment.url} download className="attachment-button attachment-download">
          <i className="glyphicon glyphicon-paperclip" />
        </a>
      }
    </div>
  </div>
);

export default CommentItem;
