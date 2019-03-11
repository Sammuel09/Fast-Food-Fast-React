import makeRequest from "../../utils/setupAxios";

export const POST_ORDER_LOADING = "POST_ORDER_LOADING";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILURE = "POST_ORDER_FAILURE";
export const CLEAR_FLASH_MESSAGE = "CLEAR_FLASH_MESSAGE";

export const USER_ORDER_HISTORY_LOADING = "USER_ORDER_HISTORY_LOADING";
export const USER_ORDER_HISTORY_SUCCESS = "USER_ORDER_HISTORY_SUCCESS";
export const USER_ORDER_HISTORY_FAILURE = "USER_ORDER_HISTORY_FAILURE";

export const postOrderLoading = () => {
  return {
    type: POST_ORDER_LOADING,
    payload: {
      isLoading: true
    }
  };
};

export const postOrderSuccess = response => {
  return {
    type: POST_ORDER_SUCCESS,
    payload: {
      isLoading: false,
      message: response.message,
      data: response.data
    }
  };
};

export const postOrderFailure = error => {
  console.log(error);
  return {
    type: POST_ORDER_FAILURE,
    payload: {
      isLoading: false,
      orderError: error.response.data.message
    }
  };
};

export const clearFlashMessage = () => ({
  type: CLEAR_FLASH_MESSAGE,
  payload: { message: "", orderError: "" }
});

export const postOrder = orderData => async dispatch => {
  dispatch(postOrderLoading());
  try {
    const response = await makeRequest("/orders", {
      method: "POST",
      body: orderData
    });
    dispatch(postOrderSuccess(response));
  } catch (error) {
    dispatch(postOrderFailure(error));
  }
};

export const userOrderHistoryLoading = () => {
  return {
    type: USER_ORDER_HISTORY_LOADING,
    payload: {
      isLoading: true
    }
  };
};

export const userOrderHistorySuccess = response => {
  return {
    type: USER_ORDER_HISTORY_SUCCESS,
    payload: {
      isLoading: false,
      message: response.message,
      data: response.data
    }
  };
};

export const userOrderHistoryFailure = error => {
  console.log(error);
  return {
    type: USER_ORDER_HISTORY_FAILURE,
    payload: {
      isLoading: false,
      orderError: error.response.data.message
    }
  };
};

export const fetchUserOrderHistory = userId => async dispatch => {
  // dispatch(postOrderLoading());
  try {
    const response = await makeRequest(`/users/${userId}/orders`);
    dispatch(userOrderHistorySuccess(response));
    console.log(response);
  } catch (error) {
    dispatch(userOrderHistoryFailure(error));
  }
};
