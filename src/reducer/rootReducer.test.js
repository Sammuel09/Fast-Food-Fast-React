import { createStore } from "redux";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

describe("Root Reducer", () => {
  it("should return the initial auth state", () => {
    const expectedInitialAuthState = {
      isLoading: false,
      isAuthenticated: false,
      hasLoginError: false,
      loginError: "",
      data: {},
      message: ""
    };
    expect(store.getState().authReducer).toEqual(expectedInitialAuthState);
  });
});
