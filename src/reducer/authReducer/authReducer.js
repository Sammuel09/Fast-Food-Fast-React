const initialAuthState = {};

import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOADING
} from '../../action/authActions/authActions';

const authReducer = (state = initialAuthState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_LOADING:
      return { ...state, ...payload };
    case USER_LOGIN_SUCCESS:
      return { ...state, ...payload };
    case USER_LOGIN_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default authReducer;
