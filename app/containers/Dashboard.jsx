import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../components/ProjectItem';
import { newProject, cancelNewProject } from '../actions/projects';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Dashboard = ({ addingProject, newProject, cancelNewProject }) => {
    return (
  <div className='main-container'>
    <div className='row'>
      <div className='col-xs-8 col-xs-offset-2'>
        <div className='projects'>
          <ProjectItem/>
        </div>
      </div>
    </div>
    { addingProject &&
      <div className='row'>
        <div className="col-xs-8 col-xs-offset-2">
          <div className="projects">
            <div className="add-project">
              <div className="project-header">
                <div className="project-field">
                  <form className="form-inline editable-wrap editable-text">
                    <div className="form-group">
                      <input type="text"/>
                    </div>
                  </form>
                  <div className="control">
                    <ul>
                      <li>
                        <a className="save"></a>
                      </li>
                      <li>
                        <a onClick={cancelNewProject} className="cancel"></a>
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
        <a onClick={newProject}
          className="btn btn-primary add-project"
        >
          <span className="icon-plus">Add TODO List</span>
        </a>
      </div>
    </div>
  </div>
);
};

function mapStateToProps(state) {
  return {
    addingProject: state.projects.projectNew
  };
};

const mapDispatchToProps = {
  newProject,
  cancelNewProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
