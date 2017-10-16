import React from 'react';
import { submit } from 'redux-form';
import NewTaskForm from './forms/task/NewTaskForm';
import EditProjectForm from './forms/project/EditProjectForm';
import TaskItem from './TaskItem';
import ControlElements from './control_elements/ControlElements';

const ProjectItem = (props) => {
  const { projectActions, id, editingProject, index, items, ...other } = props;

  return (
    <div className="project">
      <div className="project-header">
        <div className="project-field">
          { props.editingProject === props.id
            ?
              <EditProjectForm
                editProject={props.projectActions.editProject}
                addProject={props.projectActions.addProject}
                projectId={props.id}
                projectTitle={props.title}
                form={`EditProjectForm_${props.id}`}
              />
            :
              <h2>{props.title}</h2>
          }
        </div>
        <ControlElements
          elementType="project"
          editingId={props.editingProject}
          elementId={props.id}
          startEditing={() => props.projectActions.startProjectEditing(props.id)}
          remove={() => props.projectActions.removeProject(props.id)}
          save={() => props.dispatch(submit(`EditProjectForm_${props.id}`))}
          cancelEditing={() => props.projectActions.cancelProjectEditing()}
        />
      </div>
      { props.id !== 'new' &&
        <div className="tasks-container">
          <NewTaskForm
            addTask={props.taskActions.addTask}
            projectId={props.id}
            form={`AddTaskForm_${props.index}`}
            submitFailed={false}
          />
          <div className="task-list">
            <table className="tasks">
              <tbody>
                {props.items.map((item, taskIndex) => (
                  <TaskItem {...other} {...item} key={item.id} index={taskIndex} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  );
};

ProjectItem.defaultProps = {
  id: 'new',
  title: ''
};

export default ProjectItem;
