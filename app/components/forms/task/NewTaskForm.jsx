import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../../../components/common_components/fields';
import * as types from '../../../types';

const NewTaskForm = props => (
  <form
    className="new_task"
    noValidate
    onSubmit={props.handleSubmit}
  >
    <div className="create-task-header">
      <div className="create-task-in input-group">
        <Field
          name="name"
          type="text"
          placeholder="Start typing here to create a task..."
          component={TextField}
        />
        <span className="input-group-btn add-task">
          <button className="btn add-task" type="submit">Add Task</button>
        </span>
      </div>
    </div>
  </form>
);

const formSubmit = (values, dispatch, props) => {
  if (values.name) {
    return props.addTask(values);
  }
  return dispatch({ type: types.ADD_ERROR, payload: 'Task name must be present!' });
};

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    projectId: ownProps.projectId
  }
});

export default connect(mapStateToProps)(reduxForm({
  onSubmit: formSubmit
})(NewTaskForm));
