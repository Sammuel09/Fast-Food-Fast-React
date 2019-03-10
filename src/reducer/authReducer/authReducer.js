// import {
//   USER_LOGIN_FAILURE,
//   USER_LOGIN_SUCCESS,
//   USER_LOGIN_LOADING
// } from '../../action/authActions/authActions';

const initialAuthState = {
  isLoading: false,
  isAuthenticated: false,
  hasLoginError: false,
  loginError: '',
  data: {},
  message: ''
};

import * as authAction from '../../action/authActions/authActions';

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case authAction.USER_LOGIN_LOADING:
      return {
        ...state,
        ...action.payload
      };
    case authAction.USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case authAction.USER_LOGIN_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case authAction.CLEAR_FLASH_MESSAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// export default authReducer;

// const authReducer = (state = initialAuthState, { type, payload }) => {
//   switch (type) {
//     case USER_LOGIN_LOADING:
//       return { ...state, ...payload };
//     case USER_LOGIN_SUCCESS:
//       return { ...state, ...payload };
//     case USER_LOGIN_FAILURE:
//       return { ...state, ...payload };
//     default:
//       return state;
//   }
// };
