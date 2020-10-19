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
    })
    .catch((err) => {
      dispatch({
        type: ADD_NEW_USER_FAIL,
        payload: "Creating new user failed!",
      });
    });
};

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

// const loggingIn = (e) => {
//   e.preventDefault();
//   axiosWithAuth()
//     .post("/login", login)
//     .then((res) => {
//       console.log("Login.js : login: login has worked", res);
//       localStorage.setItem("token", res.data.token);
//       props.history.push("/home");
//     });
// };
