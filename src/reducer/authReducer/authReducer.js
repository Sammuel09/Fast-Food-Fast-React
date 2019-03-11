import * as authAction from "../../action/authActions/authActions";

const initialAuthState = {
  isLoading: false,
  isAuthenticated: false,
  hasLoginError: false,
  loginError: "",
  data: {},
  message: ""
};

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
    case authAction.USER_LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
