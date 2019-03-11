import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import signupReducer from "./signupReducer/signupReducer";
import menuReducer from "./menu/menuReducer";
import orderReducer from "./orders/orderReducer";

const reducers = combineReducers({
  signupReducer,
  authReducer,
  menuReducer,
  orderReducer
});

export default reducers;
