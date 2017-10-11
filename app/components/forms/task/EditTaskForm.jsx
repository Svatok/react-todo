import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../../../components/common_components/fields';

const EditTaskForm = props => (
  <form
    noValidate
    onSubmit={props.handleSubmit(props.editTask)}
  >
    <Field
      name="name"
      type="text"
      component={TextField}
    />
  </form>
);

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    id: ownProps.id,
    name: ownProps.itemText,
    projectId: ownProps.projectId,
    index: ownProps.index
  }
});

export default connect(mapStateToProps)(reduxForm()(EditTaskForm));
