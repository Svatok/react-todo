import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel } from 'react-bootstrap';

const TaskItem = () => (
  <tr>
    <td className="task-status">
      <input className="task-check" type="checkbox"/>
      <label></label>
    </td>
    <td className="task-name">
      <div className="left-border">
        <div className="task-name-text editable task-done">
          fineOk
          <span className="label label-danger deadline"></span>
        </div>
      </div>
    </td>
    <td className="task-control">
      <div className="control">
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
    </td>
  </tr>
);

TaskItem.defaultProps = {
};

TaskItem.propTypes = {
};

export default TaskItem;
