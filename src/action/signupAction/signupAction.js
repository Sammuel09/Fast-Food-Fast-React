import makeRequest from "../../utils/setupAxios";
import manageUserData from "../../utils/auth/authentication";

export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const CLEAR_FLASH_MESSAGE = "CLEAR_FLASH_MESSAGE";

// ACTION CREATORS
export const signupLoading = () => {
  return {
    type: SIGNUP_LOADING,
    payload: {
      isLoading: true
    }
  };
};

export const signupSucess = response => {
  return {
    type: SIGNUP_SUCCESS,
    payload: {
      isLoading: false,
      message: response.message,
      data: response.data,
      isAuthenticated: true
    }
  };
};

export const signUpFailure = error => {
  return {
    type: SIGNUP_FAILURE,
    payload: {
      isLoading: false,
      hasSignUpError: true,
      signUpError: error.response.data.message
    }
  };
};

export const clearFlashMessage = () => ({
  type: CLEAR_FLASH_MESSAGE,
  payload: { signUpError: "" }
});

export const signUpUser = (userData, history) => async dispatch => {
  dispatch(signupLoading());
  try {
    const response = await makeRequest("/auth/signup", {
      method: "POST",
      body: userData
    });
    manageUserData.saveUserToken(response.token);
    manageUserData.saveUsername(response.data.username);
    manageUserData.saveUserId(response.data.user_id);
    dispatch(signupSucess(response));
    history.push("/menu");
  } catch (error) {
    dispatch(signUpFailure(error));
  }
};
