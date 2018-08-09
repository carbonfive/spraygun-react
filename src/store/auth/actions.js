export const AUTH_REQUEST_LOGIN = "AUTH_REQUEST_LOGIN";
export const AUTH_REQUEST_LOGIN_SUCCESS = "AUTH_REQUEST_LOGIN_SUCCESS";
export const AUTH_REQUEST_LOGIN_FAILURE = "AUTH_REQUEST_LOGIN_FAILURE";

export const AUTH_LOGOUT = "AUTH_LOGOUT";

export function login({ email }) {
  return async dispatch => {
    dispatch(loginRequested());
    // TODO: make API call here
    dispatch(loginSucceeded({ user: { email } }));
  };
}

export function logout() {
  return { type: AUTH_LOGOUT };
}

function loginRequested() {
  return { type: AUTH_REQUEST_LOGIN };
}

function loginSucceeded(response) {
  return { type: AUTH_REQUEST_LOGIN_SUCCESS, response };
}

// function loginFailed(response) {
//   return { type: AUTH_REQUEST_LOGIN_FAILURE, response };
// }
