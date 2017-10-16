import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../../../components/common_components/fields';
import * as types from '../../../types';

const EditProjectForm = props => (
  <form
    noValidate
    onSubmit={props.handleSubmit}
  >
    <Field
      name="title"
      type="text"
      component={TextField}
    />
  </form>
);

const formSubmit = (values, dispatch, props) => {
  if (values.title) {
    return (props.projectId === 'new') ? props.addProject(values) : props.editProject(values);
  }
  return dispatch({ type: types.ADD_ERROR, payload: 'Project title must be present!' });
};

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    id: ownProps.projectId,
    title: ownProps.projectTitle,
  }
});

export default connect(mapStateToProps)(reduxForm({
  onSubmit: formSubmit
})(EditProjectForm));
