import mockStore from "../mock";

import { REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, login } from "./auth";

let store;

beforeEach(() => {
  store = mockStore({});
});

describe("login", () => {
  function subject() {
    store.dispatch(login({ email: "user@example.com", password: "secret " }));
  }

  it("dispatches REQUEST_LOGIN and REQUEST_LOGIN_SUCCESS", async () => {
    await subject();
    expect(store.getActions()).toMatchObject([
      { type: REQUEST_LOGIN },
      { type: REQUEST_LOGIN_SUCCESS }
    ]);
  });
});
