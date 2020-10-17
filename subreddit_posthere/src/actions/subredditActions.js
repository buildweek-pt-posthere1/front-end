import axios from "axios";

export const ADD_NEW_USER = "ADD_NEW_USER";
export const ADD_NEW_USER_SUCCESS = "ADD_NEW_USER_SUCCESS";
export const ADD_NEW_USER_FAIL = "ADD_NEW_USER_FAIL";

export const createUser = (newUser) => (dispatch) => {
  dispatch({ type: ADD_NEW_USER });
  axios
    .post("https://buildweek-node-auth2.herokuapp.com/api/login", newUser)
    .then((res) => {
      dispatch({
        type: ADD_NEW_USER_SUCCESS,
        payload: res.data.token,
      });
    })
    .catch((err) => {
      dispatch({ type: ADD_NEW_USER_FAIL, payload: err.message });
    });
};
