import { combineReducers } from 'redux';
import authReducer from './authReducer/authReducer';
import signupReducer from './signupReducer/signupReducer';
import menuReducer from './menu/menuReducer';

const reducers = combineReducers({
  signupReducer,
  authReducer,
  menuReducer
});

export default reducers;
