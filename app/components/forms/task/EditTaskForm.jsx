import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../../../components/common_components/fields';
import * as types from '../../../types';

const EditTaskForm = props => (
  <form
    noValidate
    onSubmit={props.handleSubmit}
  >
    <Field
      name="name"
      type="text"
      component={TextField}
    />
  </form>
);

const formSubmit = (values, dispatch, props) => {
  if (values.name) {
    return props.editTask(values);
  }
  return dispatch({ type: types.ADD_ERROR, payload: 'Task name must be present!' });
};

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    id: ownProps.id,
    name: ownProps.itemText,
    projectId: ownProps.projectId,
    index: ownProps.index
  }
});

export default connect(mapStateToProps)(reduxForm({
  onSubmit: formSubmit
})(EditTaskForm));
