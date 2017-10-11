import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { removeTask, startTaskEditing, cancelTaskEditing, editTask } from '../actions/tasks';
import EditTaskForm from './EditTaskForm';

const TaskItem = props => (
  <tr className="task-item">
    <td className="task-status">
      <input
        className="task-check"
        type="checkbox"
        checked={props.done}
        onChange={() => props.editTask({id: props.id, done: !props.done, projectId: props.todo_id, index: props.index})}
      />
      <label />
    </td>
    <td className="task-name">
      <div className="left-border">
        { props.editingTask === props.id
          ?
            <EditTaskForm
              itemId={props.id}
              itemText={props.name}
              projectId={props.todo_id}
              index={props.index}
              form={`EditTaskForm_${props.index}`}
            />
          :
            <div
              onClick={() => props.editTask({id: props.id, done: !props.done, projectId: props.todo_id, index: props.index})}
              className={classNames('task-name-text', (props.done && 'task-done'))}
            >
              {props.name}
              <span className="label label-danger deadline" />
            </div>
        }
      </div>
    </td>
    <td className="task-control">
      { (props.editingTask !== props.id) &&
        <div className="control">
          <ul>
            <li>
              <a className="sort"></a>
            </li>
            <li>
              <a
                onClick={() => props.startTaskEditing(props.id)}
                className="edit"
              />
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
        </div>
      }
      { (props.editingTask === props.id) &&
        <div className="control-editing">
          <ul>
            <li>
              <a className="save"></a>
            </li>
            <li>
              <a
                onClick={() => props.cancelTaskEditing()}
                className="cancel"
              />
            </li>
          </ul>
        </div>
      }
    </td>
  </tr>
);

const mapStateToProps = state => ({
  editingTask: state.projects.editingTask
});

const mapDispatchToProps = {
  startTaskEditing,
  cancelTaskEditing,
  editTask,
  removeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
