import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { apiInstance } from '../../utils/setupAxios';
import * as signupAction from './signupAction';
import mockSignUpData from './mockSignUpData';
const { successResponse, error } = mockSignUpData;

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(apiInstance);
const store = mockStore();

describe('Sign Up actions payload', () => {
  beforeEach(() => {
    jest.setTimeout(30000);
    store.clearActions();
  });

  it('dispatches startSignUp action and payload', () => {
    const expectedActions = [
      {
        type: signupAction.SIGNUP_LOADING,
        payload: {
          isLoading: true
        }
      }
    ];

    store.dispatch(signupAction.signupLoading());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches signUpSuccessful action and payload', () => {
    const expectedActions = [
      {
        type: signupAction.SIGNUP_SUCCESS,
        payload: {
          isLoading: false,
          message: 'Inserted a new user',
          data: {},
          isAuthenticated: true
        }
      }
    ];

    store.dispatch(signupAction.signupSucess(successResponse));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches signUpFailure action if sign up failed', () => {
    const expectedActions = [
      {
        type: signupAction.SIGNUP_FAILURE,
        payload: {
          isLoading: false,
          hasSignUpError: true,
          signUpError: error.response.data.message
        }
      }
    ];

    store.dispatch(signupAction.signUpFailure(error));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('Sign Up action Api calls', () => {
  beforeEach(() => {
    jest.setTimeout(30000);
    store.clearActions();
  });

  it('dispatches success action if sign up was successful', done => {
    const { successResponse, signupData } = mockSignUpData;
    mock.onPost('/auth/signup', {
      status: 201,
      response: successResponse
    });
    const expectedActions = [
      {
        type: signupAction.SIGNUP_SUCCESS,
        payload: {
          isLoading: false,
          message: successResponse.data.message,
          data: successResponse.data,
          isAuthenticated: true
        }
      }
    ];
    const store = mockStore({
      isLoading: false,
      isAuthenticated: false,
      hasSignUpError: false,
      signUpError: '',
      message: null,
      data: {}
    });

    store.dispatch(signupAction.signUpUser(signupData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });

  it('dispatches failure action if sign up failed', done => {
    const { errorResponse } = mockSignUpData;
    mock.onPost('/auth/signup', {
      status: 500,
      response: errorResponse
    });
    const expectedActions = [
      {
        type: signupAction.SIGNUP_FAILURE,
        payload: {
          isLoading: false,
          hasSignUpError: true,
          signUpError: error.response.data.message
        }
      }
    ];

    const store = mockStore({
      isLoading: false,
      isAuthenticated: false,
      hasSignUpError: false,
      signUpError: '',
      message: null,
      data: {}
    });

    store.dispatch(signupAction.signUpUser('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});
