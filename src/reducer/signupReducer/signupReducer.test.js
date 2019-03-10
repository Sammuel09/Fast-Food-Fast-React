import reducer from './signupReducer';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  hasSignUpError: false,
  signUpError: '',
  message: null,
  data: {}
};

describe('Sign Up Reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles sign up request', () => {
    const payload = {
      isLoading: true
    };

    expect(reducer(initialState, { type: 'SIGNUP_LOADING', payload })).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('handles sign up failure', () => {
    const payload = {
      isLoading: false,
      hasSignUpError: true,
      signUpError: 'Username already exists. Enter another username'
    };

    expect(reducer(initialState, { type: 'SIGNUP_FAILURE', payload })).toEqual({
      ...initialState,
      ...payload
    });
  });

  it('handles successful sign up', () => {
    const payload = {
      isLoading: false,
      message: 'Inserted a new user',
      data: {},
      isAuthenticated: true
    };

    expect(
      reducer(initialState, {
        type: 'SIGNUP_SUCCESS',
        payload
      })
    ).toEqual({
      ...initialState,
      ...payload
    });
  });
});
