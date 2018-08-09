import {
  AUTH_REQUEST_LOGIN,
  AUTH_REQUEST_LOGIN_SUCCESS,
  AUTH_REQUEST_LOGIN_FAILURE,
  AUTH_LOGOUT
} from "./actions";

import reducer from ".";

let state;

function subject(action) {
  return reducer(state, action);
}

describe("AUTH_REQUEST_LOGIN", () => {
  beforeEach(() => {
    state = {};
  });

  it("sets isLoading: true", () => {
    expect(subject({ type: AUTH_REQUEST_LOGIN })).toMatchObject({
      isLoading: true
    });
  });

  it("sets error: undefined", () => {
    expect(subject({ type: AUTH_REQUEST_LOGIN })).toMatchObject({
      error: undefined
    });
  });
});

describe("AUTH_REQUEST_LOGIN_SUCCESS", () => {
  const user = { email: "user@example.com" };
  const response = { user };

  beforeEach(() => {
    state = {};
  });

  it("sets isLoading: false", () => {
    expect(
      subject({ type: AUTH_REQUEST_LOGIN_SUCCESS, response })
    ).toMatchObject({
      isLoading: false
    });
  });

  it("sets user from response", () => {
    expect(
      subject({ type: AUTH_REQUEST_LOGIN_SUCCESS, response })
    ).toMatchObject({
      user
    });
  });
});

describe("AUTH_REQUEST_LOGIN_FAILURE", () => {
  const error = "Something went wrong.";
  const response = { error };

  beforeEach(() => {
    state = {};
  });

  it("sets isLoading: false", () => {
    expect(
      subject({ type: AUTH_REQUEST_LOGIN_FAILURE, response })
    ).toMatchObject({
      isLoading: false
    });
  });

  it("sets error from response", () => {
    expect(
      subject({ type: AUTH_REQUEST_LOGIN_FAILURE, response })
    ).toMatchObject({
      error
    });
  });
});

describe("AUTH_LOGOUT", () => {
  beforeEach(() => {
    state = { user: { email: "user@example.com" } };
  });

  it("sets user: undefined", () => {
    expect(subject({ type: AUTH_LOGOUT })).toMatchObject({
      user: undefined
    });
  });
});

describe("default", () => {
  beforeEach(() => {
    state = { user: { email: "user@example.com" } };
  });

  it("returns state unmodified", () => {
    expect(subject({ type: "OTHER_ACTION" })).toEqual(state);
  });
});