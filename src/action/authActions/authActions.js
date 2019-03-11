import makeRequest from "../../utils/setupAxios";
import manageUserData from "../../utils/auth/authentication";
import isValidToken from "../../utils/auth/jwtDecode";

export const USER_LOGIN_LOADING = "USER_LOGIN_LOADING";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const CLEAR_FLASH_MESSAGE = "CLEAR_FLASH_MESSAGE";
export const USER_LOGOUT = "LOGOUT";

export const logout = () => {
  manageUserData.removeUserId();
  manageUserData.removeUserToken();
  manageUserData.removeUsername();
  return { type: USER_LOGOUT, payload: {} };
};

export const loginLoading = () => {
  return {
    type: USER_LOGIN_LOADING,
    payload: {
      isLoading: true
    }
  };
};

export const loginSucess = response => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      isLoading: false,
      message: response.message,
      data: response.data,
      isAuthenticated: true
    }
  };
};

export const loginFailure = error => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: {
      isLoading: false,
      hasLoginError: true,
      loginError: error.response.data.message
    }
  };
};

export const clearFlashMessage = () => ({
  type: CLEAR_FLASH_MESSAGE,
  payload: { loginError: "" }
});

export const loginUser = (userData, history) => async dispatch => {
  dispatch(loginLoading());
  try {
    const response = await makeRequest("/auth/login", {
      method: "POST",
      body: userData
    });
    manageUserData.saveUserToken(response.token);
    manageUserData.saveUsername(response.data.username);
    manageUserData.saveUserId(response.data.user_id);
    dispatch(loginSucess(response));
    const decodedToken = isValidToken(response.token);
    const { isAdmin } = decodedToken;
    if (isAdmin === 0) {
      history.push("/menu");
    } else {
      history.push("/admin");
    }
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
