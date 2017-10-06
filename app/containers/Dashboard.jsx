import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ProjectItem from '../components/ProjectItem';
import { TextField } from '../components/common_components/fields';
import { required, email, minLength6 } from '../utils/validation';
import { fetchProjects, newProject, cancelNewProject, addProject } from '../actions/projects';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render () {
    return (
      <div className='main-container'>
        <div className='row'>
          <div className='col-xs-8 col-xs-offset-2'>
            <div className='projects'>
              {
                Object.keys(this.props.projects).map((id, index) =>
                  <ProjectItem key={id} index={index} {...this.props.projects[id]} />
                )
              }
            </div>
          </div>
        </div>
        { this.props.addingProject &&
          <div className='row'>
            <div className="col-xs-8 col-xs-offset-2">
              <div className="projects">
                <div className="add-project">
                  <div className="project-header">
                    <div className="project-field">
                      <form
                        className="form-inline editable-wrap editable-text"
                        noValidate
                        onSubmit={this.props.handleSubmit(this.props.addProject)}
                      >
                        <Field
                          name="title"
                          type="text"
                          component={TextField}
                          validate={[required]}
                        />
                      </form>
                      <div className="control">
                        <ul>
                          <li>
                            <a onClick={this.props.addProject} className="save"></a>
                          </li>
                          <li>
                            <a onClick={this.props.cancelNewProject} className="cancel"></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <div className='row'>
          <div className="col-xs-12 div_add_button_project">
            <a onClick={this.props.newProject}
              className="btn btn-primary add-project"
            >
              <span className="icon-plus">Add TODO List</span>
            </a>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  addingProject: state.projects.projectNew,
  projects: state.projects.projects
});

const mapDispatchToProps = {
  newProject,
  cancelNewProject,
  addProject,
  fetchProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'newProjectForm'
})(Dashboard));
