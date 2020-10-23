import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios'
export const ADD_NEW_USER = "ADD_NEW_USER";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAIL = "ADD_NEW_USER_FAIL";
export const HANDLE_CHANGE_SIGNUP = "HANDLE_CHANGE_SIGNUP";
export const HANDLE_CHANGE_LOGIN = "HANDLE_CHANGE_LOGIN";
export const SUB_REDDIT_HANDLE_CHANGE ="SUB_REDDIT_HANDLE_CHANGE"
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESSFUL = "LOG_IN_SUCCESSFUL";
export const LOG_IN_FAILED = "LOG_IN_FAILED";
export const LOG_OUT = "LOG_OUT"
export const FETCH_PREDICTION = "FETCH_PREDICTION";
export const FETCH_PREDICTION_SUCCESS = "FETCH_PREDICTION_SUCCESS";
export const FETCH_PREDICTION_FAIL = "FETCH_PREDICTION_FAIL";
export const SUBMIT_POSTS = "SUBMIT_POSTS"
export const SUBMIT_POSTS_SUCCESS = "SUBMIT_POSTS_SUCCESS"
export const SUBMIT_POSTS_FAIL = "SUBMIT_POSTS_FAIL"
export const DELETE_POST = "DELETE_POST"
export const FETCH_POSTS = "FETCH_POSTS"
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const CLEAR_FORM = "CLEAR FORM"


export const createUser = (newUser) => (dispatch) => {
  dispatch({ type: ADD_NEW_USER });
  axiosWithAuth()
    .post("/register", newUser)
    .then((res) => {
      dispatch({
        type: ADD_NEW_USER_SUCCESS,
        payload: res,
      });
      console.log(res);
      localStorage.setItem("id", res.data.id);
    })
    .catch((err) => {
      dispatch({
        type: ADD_NEW_USER_FAIL,
        payload: "Creating new user failed!",
      });
    });
};

export const fetchData = (posts) => (dispatch) => {
  dispatch({ type: FETCH_PREDICTION });
  axiosWithAuth()
    .post("http://easyreach-dev.us-east-1.elasticbeanstalk.com/predict", posts)
    .then((res) => {
      dispatch({
        type: FETCH_PREDICTION_SUCCESS,
        payload: res.data,
      });
      console.log(res)
    })
    .catch((err) =>
      console.log("cannont predict", err).dispatch({
        type: FETCH_PREDICTION_FAIL,
        payload: "this isn't working out",
      })
    );
};

export const submitPost = (post) => (dispatch) => {
  dispatch({type: SUBMIT_POSTS})
  axiosWithAuth().post(`https://build-week4-backend.herokuapp.com/api/post`, post).then(
    res => {
      dispatch({type: SUBMIT_POSTS_SUCCESS, payload: res.data})
      console.log(res)
    }
  ).catch(err => {
    console.log("cannot send post", err)
    dispatch({ type: SUBMIT_POSTS_FAIL, payload: 'posts not sent'})
  })
}



export const fetchPost = (post) => dispatch => {
  dispatch({type: FETCH_POSTS})
  axiosWithAuth().get("https://build-week4-backend.herokuapp.com/api/post", post).then(res => {
    dispatch({type: FETCH_POSTS_SUCCESS, payload: res.data})
    console.log(res.data)
  }).catch((err) => 
    console.log(err))
} 

export const deletePost = (postId) => dispatch => {
 
  axiosWithAuth().delete(`https://build-week4-backend.herokuapp.com/api/post/${postId}`).then(res => console.log(res)).catch(err => console.log(err))
}

export const login = (credentials) => (dispatch) => {
  dispatch({ type: LOG_IN });
  axiosWithAuth()
    .post("/login", credentials)
    .then((res) => {
      dispatch({ type: LOG_IN_SUCCESSFUL, payload: res });
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => {
      dispatch({
        type: LOG_IN_FAILED,
        payload: "Creating new user failed",
      });
    });
};

export const handle_change_signup = (e) => (dispatch) => {
  dispatch({ type: HANDLE_CHANGE_SIGNUP, payload: e });
};

export const handle_change_login = (e) => (dispatch) => {
  dispatch({ type: HANDLE_CHANGE_LOGIN, payload: e });
};

export const handle_change_subRedditPost = e => dispatch => {
  dispatch({type: SUB_REDDIT_HANDLE_CHANGE, payload: e})
}

export const clear_form = e => dispatch => {
  dispatch ({ type: CLEAR_FORM })
}

export const logout = () => dispatch => {
  dispatch({type: LOG_OUT});
  localStorage.removeItem('token')
}