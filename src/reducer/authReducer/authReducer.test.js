import reducer from './authReducer';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  hasLoginError: false,
  loginError: '',
  data: {},
  message: ''
};

describe('Auth Reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles login loading', () => {
    const payload = {
      isLoading: true
    };

    expect(
      reducer(initialState, { type: 'USER_LOGIN_LOADING', payload })
    ).toEqual({
      ...initialState,
      ...payload
    });
  });

  it('handles log in failure', () => {
    const payload = {
      isLoading: false,
      hasLoginError: true,
      loginError: ''
    };

    expect(
      reducer(initialState, { type: 'USER_LOGIN_FAILURE', payload })
    ).toEqual({
      ...initialState,
      ...payload
    });
  });

  it('handles successful log in', () => {
    const payload = {
      isLoading: false,
      message: '',
      data: {},
      isAuthenticated: true
    };

    expect(
      reducer(initialState, {
        type: 'USER_LOGIN_SUCCESS',
        payload
      })
    ).toEqual({
      ...initialState,
      ...payload
    });
  });
});
