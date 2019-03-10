import * as signUpAction from '../../action/signupAction/signupAction';

const INITIAL_STATE = {
  isLoading: false,
  isAuthenticated: false,
  hasSignUpError: false,
  signUpError: '',
  message: null,
  data: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case signUpAction.SIGNUP_LOADING:
      return {
        ...state,
        ...action.payload
      };
    case signUpAction.SIGNUP_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case signUpAction.SIGNUP_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case signUpAction.CLEAR_FLASH_MESSAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
