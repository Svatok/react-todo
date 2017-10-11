import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../components/common_components/fields';
import { editTask } from '../actions/tasks';

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

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      id: ownProps.itemId,
      name: ownProps.itemText,
      projectId: ownProps.projectId,
      index: ownProps.index
    }
  };
}

const mapDispatchToProps = {
  editTask
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm()(EditTaskForm));
