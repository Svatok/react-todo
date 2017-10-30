import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextAreaField } from '../../../components/common_components/fields';
import { required } from '../../../utils/validation';

const NewCommentForm = props => (
  <div className="row add-comment">
    <div className="col-md-12">
      <h4 className="details-block-name">Add Comment:</h4>
      <span />
      <form
        onSubmit={props.handleSubmit}
        className="{props.formHasError && 'has-error'}"
      >
        <div className="col-xs-9">
          <Field
            name="commentText"
            component={TextAreaField}
            placeholder="Your comment text ..."
            validate={[required]}
          />
        </div>
        <div className="col-xs-3 text-center comment-buttons">
          <div className="row">
            <a className="attachment-button">
              Attach File
              <i className="fa fa-save" />
            </a>
            <a className="attachment-button">
              Remove File
              <i className="fa fa-times" />
            </a>
          </div>
          <div className="row">
            <button className="btn btn-primary" type="submit">
              Add Comment
              <i className="fa fa-plus-square-o" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

const mapStateToProps = state => ({
  initialValues: {
    projectId: state.projectId,
    taskId: state.projectId
  },
  formHasError: state.form.newCommentForm && state.form.newCommentForm.syncErrors
});

export default connect(mapStateToProps)(reduxForm({
  form: 'newCommentForm'
})(NewCommentForm));
