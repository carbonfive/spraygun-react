import {
  AUTH_REQUEST_LOGIN,
  AUTH_REQUEST_LOGIN_SUCCESS,
  AUTH_REQUEST_LOGIN_FAILURE,
  AUTH_LOGOUT
} from "./actions";

const initialState = {
  error: undefined,
  user: undefined,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST_LOGIN: {
      return { ...state, isLoading: true, error: undefined };
    }
    case AUTH_REQUEST_LOGIN_SUCCESS: {
      const { user } = action.response;
      return { ...state, isLoading: false, user };
    }
    case AUTH_REQUEST_LOGIN_FAILURE: {
      const { error } = action.response;
      return { ...state, isLoading: false, error };
    }
    case AUTH_LOGOUT: {
      return { ...state, user: undefined };
    }
    default: {
      return state;
    }
  }
}
