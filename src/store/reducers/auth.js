import {
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_FAILURE,
  LOGOUT
} from "store/actions/auth";

const initialState = {
  error: undefined,
  user: undefined,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN: {
      return { ...state, isLoading: true, error: undefined };
    }
    case REQUEST_LOGIN_SUCCESS: {
      const { user } = action.response;
      return { ...state, isLoading: false, user };
    }
    case REQUEST_LOGIN_FAILURE: {
      const { error } = action.response;
      return { ...state, isLoading: false, error };
    }
    case LOGOUT: {
      return { ...state, user: undefined };
    }
    default: {
      return state;
    }
  }
}
