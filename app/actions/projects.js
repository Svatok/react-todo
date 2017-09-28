import * as types from '../types';


export const newProject = () => (dispatch) => {
  dispatch({ type: types.ADD_PROJECT_START });
};

export const cancelNewProject = () => (dispatch) => {
  dispatch({ type: types.ADD_PROJECT_CANCEL });
};

// export const newProject = (dispatch) => {
//   dispatch({ type: types.ADD_PROJECT_START });
// };
//
// export const submitLogIn = ({ email, password }, dispatch) => {
//   dispatch({ type: types.START_LOGIN_USER });
//   return api()
//     .post('/auth/sign_in', {
//       email,
//       password
//     })
//     .then((response) => {
//       dispatch({
//         type: types.SUCCESS_LOGIN_USER,
//         payload: response.data.data
//       });
//       browserHistory.push('/');
//     })
//     .catch((error) => {
//       dispatch({ type: types.ERROR_LOGIN_USER });
//       showFormErrors(error.data.errors);
//     });
// };
//
// export const logOut = () => (dispatch) => {
//   dispatch({ type: types.START_LOGOUT_USER });
//   return api()
//     .delete('/auth/sign_out')
//     .then((response) => {
//       deleteTokenFromCookies();
//       dispatch({
//         type: types.SUCCESS_LOGOUT_USER,
//         payload: response
//       });
//       browserHistory.push('/');
//     })
//     .catch((error) => {
//       dispatch({
//         type: types.ERROR_LOGOUT_USER,
//         payload: error
//       });
//     });
// };
