import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import signupReducer from "./signupReducer/signupReducer";
import menuReducer from "./menu/menuReducer";
import orderReducer from "./orders/orderReducer";
import orderHistoryReducer from "./orderHistory/orderHistoryReducer";

const reducers = combineReducers({
  signupReducer,
  authReducer,
  menuReducer,
  orderReducer,
  orderHistoryReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;

// export default reducers;
