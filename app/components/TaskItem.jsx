import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import { removeTask } from '../actions/tasks';

const TaskItem = (props) => (
  <tr className='task-item'>
    <td className="task-status">
      <input className="task-check" type="checkbox"/>
      <label></label>
    </td>
    <td className="task-name">
      <div className="left-border">
        <div className="task-name-text editable task-done">
          {props.name}
          <span className="label label-danger deadline"></span>
        </div>
      </div>
    </td>
    <td className="task-control">
      <div className="control">
        { (props.editingTask != props.id) &&
          <ul>
            <li>
              <a className="sort"></a>
            </li>
            <li>
              <a className="edit"></a>
            </li>
            <li>
              <a className="comment"></a>
            </li>
            <li>
              <a
                onClick={() => props.removeTask(props.id, props.todo_id, props.index)}
                className="delete"
              />
            </li>
          </ul>
        }
      </div>
      <div className="control-editing">
        { (props.editingTask === props.id) &&
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
    </td>
  </tr>
);

const mapStateToProps = state => {
  editingTask: state.projects.editingTask
};

const mapDispatchToProps = {
  removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
