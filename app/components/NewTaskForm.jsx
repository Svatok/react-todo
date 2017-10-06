import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { TextField } from '../components/common_components/fields';
import { required } from '../utils/validation';
import { addTask } from '../actions/tasks';

const clearForm = formName => (dispatch) => {
  return dispatch(reset(formName));
};

const NewTaskForm = ({projectId, addTask, ...props, clearForm}) => {
  const submitAddTask = (data) => {
    addTask(data);
    clearForm(props.form);
  };

  return (
    <div>
      <form
        className="new_task"
        noValidate
        onSubmit={props.handleSubmit(submitAddTask)}
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
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      projectId: ownProps.projectId
    }
  };
};

const mapDispatchToProps = {
  addTask,
  clearForm
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm()(NewTaskForm));
