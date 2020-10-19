import {
  ADD_NEW_USER,
  HANDLE_CHANGE_SIGNUP,
  HANDLE_CHANGE_LOGIN,
  LOG_IN,
} from "../actions/subredditActions";

const initialState = {
  signUpForm: {
    username: "",
    password: "",
  },
  loginForm: {
    username: "",
    password: "",
  },
  is_loading_data: false,
  error: "",
};

export const subredditReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        is_loading_data: true,
      };
    case LOG_IN:
      return {
        ...state,
        is_loading_data: true,
      };
    case HANDLE_CHANGE_SIGNUP:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    case HANDLE_CHANGE_LOGIN:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    default:
      return state;
  }
};
