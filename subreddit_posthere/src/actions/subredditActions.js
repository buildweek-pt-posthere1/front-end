import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const ADD_NEW_USER = "ADD_NEW_USER";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAIL = "ADD_NEW_USER_FAIL";

export const createUser = (newUser) => (dispatch) => {
  dispatch({ type: ADD_NEW_USER });
  axiosWithAuth();
  axios
    .post("https://redditposthere.herokuapp.com/api/auth/register", newUser)
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
