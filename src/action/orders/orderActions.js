import makeRequest from "../../utils/setupAxios";

export const POST_ORDER_LOADING = "POST_ORDER_LOADING";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILURE = "POST_ORDER_FAILURE";
export const CLEAR_FLASH_MESSAGE = "CLEAR_FLASH_MESSAGE";

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
