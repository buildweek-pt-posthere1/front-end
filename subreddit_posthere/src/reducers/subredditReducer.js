import { ADD_NEW_USER, HANDLE_CHANGE } from "../actions/subredditActions";

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
    case HANDLE_CHANGE:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    default:
      return state;
  }
};
