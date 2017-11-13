import React from 'react';

const CommentItem = props => (
  <div className="row vertical-align coment-bottom-border">
    <div className="col-md-1 text-right">
      <a onClick={props.remove} className="remove-comment">
        <i className="glyphicon glyphicon-remove text-danger" />
      </a>
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
