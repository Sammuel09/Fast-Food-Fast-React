const initialAuthState = {
  isLoading: true,
  menuError: '',
  data: [],
  message: ''
};

import * as menuAction from '../../action/menu/menuAction';

export default (state = initialAuthState, action) => {
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
