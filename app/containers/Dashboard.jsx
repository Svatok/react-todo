import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import ProjectItem from '../components/ProjectItem';
import { TextField } from '../components/common_components/fields';
import { required } from '../utils/validation';
import * as projectActions from '../actions/projects';
import * as taskActions from '../actions/tasks';

class Dashboard extends Component {
  componentDidMount() {
    this.props.projectActions.fetchProjects();
  }

  render() {
    const { projects, ...other } = this.props;

    return (
      <div className="main-container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="projects">
              {
                Object.keys(this.props.projects).map((id, index) =>
                  <ProjectItem {...other} {...this.props.projects[id]} key={id} index={index} />
                )
              }
            </div>
          </div>
        </div>
        { (this.props.editingProject === 'new') &&
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <div className="projects">
                <ProjectItem {...other} key="new" />
              </div>
            </div>
          </div>
        }
        <div className="row">
          <div className="col-xs-12 div_add_button_project">
            <a onClick={() => this.props.projectActions.startProjectEditing('new')}
              className="btn btn-primary add-project"
            >
              <span className="icon-plus">Add TODO List</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingProject: state.projects.projectNew,
  editingProject: state.projects.editingProject,
  projects: state.projects.projects,
  editingTask: state.projects.editingTask
});

function mapDispatchToProps(dispatch) {
  return {
    projectActions: bindActionCreators(projectActions, dispatch),
    taskActions: bindActionCreators(taskActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'newProjectForm'
})(Dashboard));
