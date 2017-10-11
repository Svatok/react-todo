import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../../../components/common_components/fields';
import { required } from '../../../utils/validation';

const NewTaskForm = props => (
  <div>
    <form
      className="new_task"
      noValidate
      onSubmit={props.handleSubmit(props.addTask)}
    >
      <div className="create-task-header">
        <div className="create-task-in input-group">
          <Field
            name="name"
            type="text"
            placeholder="Start typing here to create a task..."
            component={TextField}
            validate={[required]}
            clearError={() => props.clearSubmitErrors({})}
            errorMessageType="alert"
          />
          <span className="input-group-btn add-task">
            <button className="btn add-task" type="submit">Add Task</button>
          </span>
        </div>
      </div>
    </form>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    projectId: ownProps.projectId,
    form: ownProps.form
  }
});

export default connect(mapStateToProps)(reduxForm()(NewTaskForm));
