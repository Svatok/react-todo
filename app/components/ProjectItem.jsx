import React from 'react';
import { connect } from 'react-redux';
import NewTaskForm from './NewTaskForm';
import EditProjectForm from './EditProjectForm';
import TaskItem from './TaskItem';
import { removeProject, startProjectEditing, cancelProjectEditing } from '../actions/projects';

const ProjectItem = props => (
  <div className="project">
    <div className="project-header">
      <div className="project-field">
        { props.editingProject === props.id
          ?
            <EditProjectForm
              projectId={props.id}
              projectTitle={props.title}
              form={`EditProjectForm_${props.id}`}
            />
          :
            <h2>{props.title}</h2>
        }
      </div>
      { (props.editingProject !== props.id) &&
        <div className="control">
          <ul>
            <li>
              <a
                onClick={() => props.startProjectEditing(props.id)}
                className="edit"
              />
            </li>
            <li>
              <a
                onClick={() => props.removeProject(props.id)}
                className="delete"
              />
            </li>
          </ul>
        </div>
      }
      { (props.editingProject === props.id) &&
        <div className="control-editing">
          <ul>
            <li>
              <a className="save" />
            </li>
            <li>
              <a
                onClick={() => props.cancelProjectEditing()}
                className="cancel"
              />
            </li>
          </ul>
        </div>
      }
    </div>
    <div className="tasks-container">
      <NewTaskForm projectId={props.id} form={`AddTaskForm_${props.index}`} />
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
  removeProject,
  startProjectEditing,
  cancelProjectEditing
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);
