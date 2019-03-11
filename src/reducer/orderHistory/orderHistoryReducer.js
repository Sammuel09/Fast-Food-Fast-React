import * as orderAction from "../../action/orders/orderActions";

const initialState = {
  isLoading: true,
  orderHistoryError: "",
  data: {},
  message: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case orderAction.USER_ORDER_HISTORY_LOADING:
    //   return {
    //     ...state,
    //     ...action.payload
    //   };
    case orderAction.USER_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case orderAction.USER_ORDER_HISTORY_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    // case orderAction.CLEAR_FLASH_MESSAGE:
    //   return { ...state, ...action.payload };
    default:
      return state;
  }
};
