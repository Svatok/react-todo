import * as types from '../types';

const initialState = {
  projects: {},
  editingProject: null,
  editingTask: null
};

export default function dashboard(state = initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: payload
      };
    case types.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: {
          ...state.projects,
          [payload.id]: payload
        },
        editingProject: null
      };
    case types.SET_EDITING_STATUS_TO_PROJECT:
      return {
        ...state,
        editingProject: payload,
        editingTask: null
      };
    case types.UNSET_EDITING_STATUS_TO_PROJECT:
      return {
        ...state,
        editingProject: null
      };
    case types.EDIT_PROJECT_SUCCESS: {
      return {
        ...state,
        projects: {
          ...state.projects,
          [payload.id]: payload
        },
        editingProject: null
      };
    }
    case types.REMOVE_PROJECT_SUCCESS: {
      const removeProject = () => {
        const newProjects = Object.assign({}, state.projects);
        delete newProjects[payload];
        return newProjects;
      };
      return {
        ...state,
        projects: removeProject()
      };
    }
    case types.ADD_TASK_SUCCESS: {
      const insertItem = () => {
        const newTasks = state.projects[payload.todo_id].items.slice();
        newTasks.splice(payload.position, 0, payload);
        return newTasks;
      };
      return {
        ...state,
        projects: {
          ...state.projects,
          [payload.todo_id]: {
            ...state.projects[payload.todo_id],
            items: insertItem()
          }
        }
      };
    }
    case types.SET_EDITING_STATUS_TO_TASK:
      return {
        ...state,
        editingTask: payload,
        editingProject: null
      };
    case types.UNSET_EDITING_STATUS_TO_TASK:
      return {
        ...state,
        editingTask: null
      };
    case types.EDIT_TASK_SUCCESS: {
      const updateItem = () => {
        return state.projects[payload.task.todo_id].items.map((item, index) => {
          if (index !== payload.index) {
            return item;
          }
          return {
            ...item,
            ...payload.task
          };
        });
      };
      return {
        ...state,
        projects: {
          ...state.projects,
          [payload.task.todo_id]: {
            ...state.projects[payload.task.todo_id],
            items: updateItem()
          }
        },
        editingTask: null
      };
    }
    case types.REMOVE_TASK_SUCCESS: {
      const removeItem = () => {
        const newTasks = state.projects[payload.projectId].items.filter((item, index) => index !== payload.index);
        return newTasks;
      };
      return {
        ...state,
        projects: {
          ...state.projects,
          [payload.projectId]: {
            ...state.projects[payload.projectId],
            items: removeItem()
          }
        }
      };
    }
    case types.SORT_TASKS_SUCCESS: {
      return {
        ...state,
        projects: {
          ...state.projects,
          [payload.projectId]: {
            ...state.projects[payload.projectId],
            items: payload.newItems
          }
        }
      };
    }
    default:
      return state;
  }
}
