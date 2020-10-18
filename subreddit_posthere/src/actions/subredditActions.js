import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAIL = "ADD_NEW_USER_FAIL";
export const HANDLE_CHANGE = "HANDLE_CHANGE";

export const createUser = (newUser) => (dispatch) => {
  dispatch({ type: ADD_NEW_USER });
  axiosWithAuth()
    .post("/register", newUser)
    .then((res) => {
      dispatch({
        type: ADD_NEW_USER_SUCCESS,
        payload: res,
      });
      localStorage.setItem("token", res.data.token);
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: ADD_NEW_USER_FAIL, payload: err.message });
    });
};

export const handle_change = (e) => (dispatch) => {
  dispatch({ type: HANDLE_CHANGE, payload: e });
};
