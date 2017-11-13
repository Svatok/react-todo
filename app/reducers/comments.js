import * as types from '../types';

const initialState = {
  list: {}
};

export default function comments(state = initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        list: payload
      };
    case types.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          [payload.id]: payload
        }
      };
    case types.REMOVE_COMMENT_SUCCESS: {
      const removeComment = () => {
        const newComments = Object.assign({}, state.list);
        delete newComments[payload];
        return newComments;
      };
      return {
        ...state,
        list: removeComment()
      };
    }
    default:
      return state;
  }
}
