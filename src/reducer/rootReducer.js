import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import signupReducer from './signupReducer/signupReducer';

const reducers = combineReducers({
  signupReducer,
  authReducer
});

export default reducers;
