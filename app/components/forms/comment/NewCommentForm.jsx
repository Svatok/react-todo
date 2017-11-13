import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextAreaField, UploadField } from '../../../components/common_components/fields';
import { required, isFile } from '../../../utils/validation';
import { addComment } from '../../../actions/comments';
import { addFile, removeFile } from '../../../actions/file';

const NewCommentForm = props => (
  <div className="row add-comment">
    <div className="col-md-12">
      <h4 className="details-block-name">Add Comment:</h4>
      <span />
      <form
        onSubmit={props.handleSubmit(addComment)}
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
            <Field
              component={UploadField}
              fileName={props.fileName}
              name="attachment"
              removeFile={props.removeFile}
              addFile={props.addFile}
              touchOnChange
              validate={[isFile]}
            />
          </div>
          <div className="row">
            <button className="btn btn-primary" type="submit">
              Add Comment&nbsp;
              <i className="glyphicon glyphicon-plus" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    projectId: ownProps.projectId,
    taskId: ownProps.taskId
  },
  fileName: state.file.fileName,
  formHasError: state.form.newCommentForm && state.form.newCommentForm.syncErrors
});

const mapDispatchToProps = {
  addFile,
  removeFile
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'newCommentForm'
})(NewCommentForm));
