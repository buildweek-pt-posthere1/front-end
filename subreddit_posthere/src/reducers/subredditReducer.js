import {
  ADD_NEW_USER,
  HANDLE_CHANGE_SIGNUP,
  HANDLE_CHANGE_LOGIN,
  LOG_IN, LOG_OUT,
  FETCH_PREDICTION,
  FETCH_PREDICTION_SUCCESS,
  FETCH_PREDICTION_FAIL,
  SUB_REDDIT_HANDLE_CHANGE,
  SUBMIT_POSTS_SUCCESS,
  SUBMIT_POSTS, FETCH_POSTS, FETCH_POSTS_SUCCESS, CLEAR_FORM
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
  userId: 0,
  postPrediction: 
    [],
    isloggedIn: false,
  subRedPosts: {
    title: "",
    text: "",
  },
  prevPosts: [],
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
        isloggedIn: true, 
      };
      case LOG_OUT: 
      return {
        ...state,
        isloggedIn: false,
      }
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
      case SUB_REDDIT_HANDLE_CHANGE: 
      return {
        ...state,
        subRedPosts: {
          ...state.subRedPosts,
          [action.payload.target.name]: action.payload.target.value
        }
      }
      case CLEAR_FORM: 
      return{
        ...state,
        subRedPosts: {
          title: "",
          text: ""
        }
      }
      case SUBMIT_POSTS: {
        return{
          ...state,
          subRedPosts: {title: "", text: ""}
        }
      }
      case SUBMIT_POSTS_SUCCESS:
        return {
          ...state,
          subRedPost: {       
            text: '',
          }
        }
    case FETCH_POSTS: 
        return{
          ...state,
          error: action.payload
        }
    case FETCH_POSTS_SUCCESS: 
        return{ 
          ...state,
          prevPosts: [action.payload]
        }
    case FETCH_PREDICTION:
      return {
        ...state
        
      };
    case FETCH_PREDICTION_SUCCESS:
      return {
        ...state, 
        postPrediction : [action.payload]
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
