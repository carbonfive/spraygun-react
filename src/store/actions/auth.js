export const REQUEST_LOGIN = "auth/REQUEST_LOGIN";
export const REQUEST_LOGIN_SUCCESS = "auth/REQUEST_LOGIN_SUCCESS";
export const REQUEST_LOGIN_FAILURE = "auth/REQUEST_LOGIN_FAILURE";

export const LOGOUT = "auth/LOGOUT";

export function login({ email }) {
  return async dispatch => {
    dispatch(loginRequested());
    // TODO: make API call here
    dispatch(loginSucceeded({ user: { email } }));
  };
}

export function logout() {
  return { type: LOGOUT };
}

function loginRequested() {
  return { type: REQUEST_LOGIN };
}

function loginSucceeded(response) {
  return { type: REQUEST_LOGIN_SUCCESS, response };
}

// function loginFailed(response) {
//   return { type: REQUEST_LOGIN_FAILURE, response };
// }
