import { axiosWithAuth } from "../utils/axiosWithAuth";
import { ADD_NEW_USER } from "../actions/subredditActions";
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
    default:
      return state;
  }
};
