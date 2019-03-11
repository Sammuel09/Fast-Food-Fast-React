import * as menuAction from "../../action/menu/menuAction";

const initialState = {
  isLoading: true,
  menuError: "",
  data: [],
  message: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case menuAction.FETCH_MENU_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case menuAction.FETCH_MENU_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    // case authAction.CLEAR_FLASH_MESSAGE:
    //   return { ...state, ...action.payload };
    default:
      return state;
  }
};
