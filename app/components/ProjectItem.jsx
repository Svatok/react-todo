import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import NewTaskForm from './NewTaskForm';
import TaskItem from './TaskItem';

const ProjectItem = () => (
  <div className="project">
    <div className="project-header">
      <div className="project-field">
        <h2 className="editable">
          Hello project11111
        </h2>
      </div>
      <div className="control">
        <ul>
          <li>
            <a className="edit"></a>
          </li>
          <li>
            <a className="delete"></a>
          </li>
        </ul>
      </div>
      <div className="control-editing">
        <ul>
          <li>
            <a className="save"></a>
          </li>
          <li>
            <a className="cancel"></a>
          </li>
        </ul>
      </div>
    </div>
    <div className="tasks-container">
      <NewTaskForm/>
      <div className="task-list">
        <table className="tasks">
          <tbody>
            <TaskItem/>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

ProjectItem.defaultProps = {
};

ProjectItem.propTypes = {
};

export default ProjectItem;
