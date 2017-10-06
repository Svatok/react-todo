import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import NewTaskForm from './NewTaskForm';
import TaskItem from './TaskItem';
import { removeProject } from '../actions/projects';

const ProjectItem = props => (
  <div className="project">
    <div className="project-header">
      <div className="project-field">
        <h2 className="editable">
          {props.title}
        </h2>
      </div>
      <div className="control">
        { (props.editingProject != props.id) &&
          <ul>
            <li>
              <a className="edit"></a>
            </li>
            <li>
              <a
                onClick={() => props.removeProject(props.id)}
                className="delete"
              />
            </li>
          </ul>
        }
      </div>
      <div className="control-editing">
        { (props.editingProject === props.id) &&
          <ul>
            <li>
              <a className="save"></a>
            </li>
            <li>
              <a className="cancel"></a>
            </li>
          </ul>
        }
      </div>
    </div>
    <div className="tasks-container">
      <NewTaskForm projectId={props.id} form={`AddTaskForm_${props.index}`}/>
      <div className="task-list">
        <table className="tasks">
          <tbody>
            {props.items.map((item, index) => (
              <TaskItem key={item.id} index={index} {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  editingProject: state.projects.editingProject
});

const mapDispatchToProps = {
  removeProject
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem)
