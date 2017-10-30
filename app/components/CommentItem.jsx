import React from 'react';

const CommentItem = props => (
  <div className="row vertical-align coment-bottom-border">
    <div className="col-md-1 text-right">
      <a>
        <i className="fa fa-times" />
      </a>
    </div>
    <div className="col-md-8 comment-text">
      {props.comment_text}
    </div>
    <div className="col-md-3 text-center">
      <span>&nbsp;</span>
      { props.attachment &&
        <a className="attachment-button attachment-download" href="{props.attachment.url}">
          <i className="fa fa-paperclip" />
        </a>
      }
    </div>
  </div>
);

export default CommentItem;
