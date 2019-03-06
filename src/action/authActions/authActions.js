export const USER_LOGIN_LOADING = 'USER_LOGIN_LOADING';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const loginloading = () => ({
  type: LOGIN_LOADING,
  payload: {}
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
  payload: {}
});

export const loginError = () => {
  return { type: USER_LOGIN_FAILURE, payload: {} };
};
