import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAIL = "ADD_NEW_USER_FAIL";
export const HANDLE_CHANGE_SIGNUP = "HANDLE_CHANGE_SIGNUP";
export const HANDLE_CHANGE_LOGIN = "HANDLE_CHANGE_LOGIN";
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESSFUL = "LOG_IN_SUCCESSFUL";
export const LOG_IN_FAILED = "LOG_IN_FAILED";
export const FETCH_PREDICTION = "FETCH_PREDICTION";
export const FETCH_PREDICTION_SUCCESS = "FETCH_PREDICTION_SUCCESS";
export const FETCH_PREDICTION_FAIL = "FETCH_PREDICTION_FAIL";

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

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_PREDICTION });
  axiosWithAuth()
    .post("https://bw3-posthere.herokuapp.com/predict")
    .then((res) => {
      dispatch({
        type: FETCH_PREDICTION_SUCCESS,
        payload: {
          input: res.data.input,
          predict: res.data.predict,
        },
      });
    })
    .catch((err) =>
      console.log("cannont predict", err).dispatch({
        type: FETCH_PREDICTION_FAIL,
        payload: "this isn't working out",
      })
    );
};

export const login = (credentials) => (dispatch) => {
  dispatch({ type: LOG_IN });
  axiosWithAuth()
    .post("/login", credentials)
    .then((res) => {
      dispatch({ type: LOG_IN_SUCCESSFUL, payload: res });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
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
