import * as types from '../types';

const initialState = {
  comments: {}
};

export default function dashboard(state = initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload
      };
    case types.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [payload.id]: payload
        }
      };
    case types.REMOVE_COMMENT_SUCCESS: {
      const removeComment = () => {
        const newComments = Object.assign({}, state.comments);
        delete newComments[payload];
        return newComments;
      };
      return {
        ...state,
        comments: removeComment()
      };
    }
    default:
      return state;
  }
}
