import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../../../components/common_components/fields';

const EditProjectForm = props => (
  <form
    noValidate
    onSubmit={props.handleSubmit((props.projectId === 'new') ? props.addProject : props.editProject)}
  >
    <Field
      name="title"
      type="text"
      component={TextField}
    />
  </form>
);

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    id: ownProps.projectId,
    title: ownProps.projectTitle,
  }
});

export default connect(mapStateToProps)(reduxForm()(EditProjectForm));
