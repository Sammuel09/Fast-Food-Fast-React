import makeRequest from '../../utils/setupAxios';

export const FETCH_MENU_LOADING = 'FETCH_MENU_LOADING';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';

// export const fetchMenuLoading = () => {
//   return {
//     type: FETCH_MENU_LOADING,
//     payload: {
//       isLoading: true
//     }
//   };
// };

export const fetchMenuSuccess = response => {
  return {
    type: FETCH_MENU_SUCCESS,
    payload: {
      isLoading: false,
      message: response.message,
      data: response.data
    }
  };
};

export const fetchMenuFailure = error => {
  return {
    type: FETCH_MENU_FAILURE,
    payload: {
      isLoading: false,
      menuError: error.response.data.message
    }
  };
};

export const fetchMenu = () => async dispatch => {
  // dispatch(fetchMenuLoading());
  try {
    const response = await makeRequest('/menu');
    dispatch(fetchMenuSuccess(response));
  } catch (error) {
    dispatch(fetchMenuFailure(error));
  }
};
