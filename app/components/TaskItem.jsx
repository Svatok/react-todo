import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import classNames from 'classnames';
import EditTaskForm from './forms/task/EditTaskForm';
import ControlElements from './control_elements/ControlElements';

const TaskItem = (props) => {
  const mainData = {
    id: props.id,
    projectId: props.todo_id,
    index: props.index
  };

  return (
    <tr className="task-item">
      <td className="task-status">
        <input
          className="task-check"
          type="checkbox"
          checked={props.done}
          onChange={() => props.taskActions.editTask({ done: !props.done, ...mainData })}
        />
        <label />
      </td>
      <td className="task-name">
        <div className="left-border">
          { props.editingTask === props.id
            ?
              <EditTaskForm
                {...mainData}
                editTask={props.taskActions.editTask}
                itemText={props.name}
                form={`EditTaskForm_${props.index}`}
              />
            :
              <div
                onClick={() => props.taskActions.editTask({ done: !props.done, ...mainData })}
                className={classNames('task-name-text', (props.done && 'task-done'))}
              >
                {props.name}
                <span className="label label-danger deadline" />
              </div>
          }
        </div>
      </td>
      <td className="task-control">
        <ControlElements
          elementType="task"
          editingId={props.editingTask}
          elementId={props.id}
          startEditing={() => props.taskActions.startTaskEditing(props.id)}
          remove={() => props.taskActions.removeTask({...mainData})}
          save={() => props.dispatch(submit(`EditTaskForm_${props.index}`))}
          cancelEditing={() => props.taskActions.cancelTaskEditing()}
          mainData={mainData}
        />
      </td>
    </tr>
  );
};

export default connect()(TaskItem);
