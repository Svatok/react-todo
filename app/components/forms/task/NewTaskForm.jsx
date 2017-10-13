import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '../../../components/common_components/fields';
import AlertMessage from '../../common_components/AlertMessage';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.clearError = this.clearError.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      error: null
    };
  }

  clearError() {
    this.setState({error: null });
  }

  submitForm(values) {
    if (values.name) {
      this.setState({error: null });
      return this.props.addTask(values);
    }
    return this.setState({error: 'Required' });
  }

  render() {
    return (
      <div>
        { this.state.error &&
          <AlertMessage
            message={this.state.error}
            bsStyle="danger"
            onDismiss={() => this.clearError()}
          />
        }
        <form
          className="new_task"
          noValidate
          onSubmit={this.props.handleSubmit(this.submitForm)}
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
  }
}

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    projectId: ownProps.projectId
  }
});

export default connect(mapStateToProps)(reduxForm()(NewTaskForm));
