import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../components/common_components/fields';
import { editProject} from '../actions/projects';

const EditProjectForm = props => (
  <form
    noValidate
    onSubmit={props.handleSubmit(props.editProject)}
  >
    <Field
      name="title"
      type="text"
      component={TextField}
    />
  </form>
);

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      id: ownProps.projectId,
      title: ownProps.projectTitle,
    }
  };
}

const mapDispatchToProps = {
  editProject
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm()(EditProjectForm));
