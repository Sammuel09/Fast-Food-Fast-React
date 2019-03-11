import * as orderAction from "../../action/orders/orderActions";

const initialState = {
  isLoading: false,
  orderError: "",
  data: {},
  message: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case orderAction.POST_ORDER_LOADING:
      return {
        ...state,
        ...action.payload
      };
    case orderAction.POST_ORDER_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case orderAction.POST_ORDER_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    case orderAction.CLEAR_FLASH_MESSAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
