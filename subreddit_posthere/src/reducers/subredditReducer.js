import {
  ADD_NEW_USER,
  HANDLE_CHANGE_SIGNUP,
  HANDLE_CHANGE_LOGIN,
  LOG_IN,
  FETCH_PREDICTION,
  FETCH_PREDICTION_SUCCESS,
  FETCH_PREDICTION_FAIL,
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
  postPrediction: {
    input: "",
    predict: "",
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
    case FETCH_PREDICTION:
      return {
        ...state,
      };
    case FETCH_PREDICTION_SUCCESS:
      return {
        ...state,
        postPrediction: action.payload,
      };
    case FETCH_PREDICTION_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
