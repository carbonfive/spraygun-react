import mockStore from "../mock";

import {
  AUTH_REQUEST_LOGIN,
  AUTH_REQUEST_LOGIN_SUCCESS,
  login
} from "./actions";

let store;

beforeEach(() => {
  store = mockStore({});
});

describe("login", () => {
  function subject() {
    store.dispatch(login({ email: "user@example.com", password: "secret " }));
  }

  it("dispatches AUTH_REQUEST_LOGIN and AUTH_REQUEST_LOGIN_SUCCESS", async () => {
    await subject();
    expect(store.getActions()).toMatchObject([
      { type: AUTH_REQUEST_LOGIN },
      { type: AUTH_REQUEST_LOGIN_SUCCESS }
    ]);
  });
});
