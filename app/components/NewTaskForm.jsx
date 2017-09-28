import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel } from 'react-bootstrap';

const NewTaskForm = () => (
  <div>
    <form className="new_task">
      <div className="create-task-header">
        <div className="create-task-in input-group">
          <input className="form-control" placeholder="Start typing here to create a task..." type="text"/>
          <span className="input-group-btn add-task">
            <button className="btn add-task" type="submit">Add Task</button>
          </span>
        </div>
      </div>
    </form>
  </div>
);

NewTaskForm.defaultProps = {
};

NewTaskForm.propTypes = {
};

export default NewTaskForm;
