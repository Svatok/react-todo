import * as types from '../types';

const initialState = {
  fetched: false,
  fetching: false,
  projects: {},
  project: null,
  projectNew: false,
  editingProject: null,
  editingTask: null
};

export default function projects(state = initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_PROJECTS_START:
      return {
        ...state,
        fetched: false,
        fetching: true
      };
    case types.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        fetched: true,
        fetching: false,
        projects: payload
      };
    case types.FETCH_PROJECTS_ERROR:
      return {
        ...state,
        fetched: false,
        fetching: false
      };
    case types.ADD_PROJECT_START:
      return {
        ...state,
        projectNew: true
      };
    case types.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: {
          ...state.projects,
          [payload.id]: payload
        },
        projectNew: false
      };
    case types.ADD_PROJECT_CANCEL:
      return {
        ...state,
        projectNew: false
      };
    // case types.REMOVE_PROJECT_START:
    //   return {
    //     ...state,
    //     job: null
    //   };
    case types.SET_EDITING_STATUS_TO_PROJECT:
      return {
        ...state,
        editingProject: payload
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
//  case types.REMOVE_PROJECT_ERROR:
//   return {
//     ...state,
//     job: null
//   };

// case types.ADD_TASK_START:
//   return {
//     ...state,
//     projectNew: true
//   };
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
//  case types.ADD_TASK_ERROR:
//   return {
//     ...state,
//     projectNew: false
//   };
    case types.SET_EDITING_STATUS_TO_TASK:
      return {
        ...state,
        editingTask: payload
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
    case types.ADD_TASK_ERROR:
      return {
        ...state,
        editingTask: null
      };
// case types.REMOVE_TASK_START:
//   return {
//     ...state,
//     job: null
//   };
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
//  case types.REMOVE_TASK_ERROR:
//   return {
//     ...state,
//     job: null
//   };
    default:
      return state;
  }
}
