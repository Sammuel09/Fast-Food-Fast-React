import reducer from './menuReducer';

const initialState = {
  isLoading: true,
  menuError: '',
  data: [],
  message: ''
};

describe('Menu Reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles failure of fetching of menu', () => {
    const payload = {
      isLoading: false,
      menuError: ''
    };

    expect(
      reducer(initialState, { type: 'FETCH_MENU_FAILURE', payload })
    ).toEqual({
      ...initialState,
      ...payload
    });
  });

  it('handles successful fetching of menu', () => {
    const payload = {
      isLoading: false,
      message: 'Retrieved all 5 menu',
      data: []
    };

    expect(
      reducer(initialState, {
        type: 'FETCH_MENU_SUCCESS',
        payload
      })
    ).toEqual({
      ...initialState,
      ...payload
    });
  });
});
