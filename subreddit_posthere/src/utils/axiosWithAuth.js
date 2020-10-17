import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://redditposthere.herokuapp.com/api/auth",
  });
};

//and login API : Post https://buildweek-node-auth2.herokuapp.com/api/login
//Post https://buildweek-node-auth2.herokuapp.com/api/register

// https://build-week4-backend.herokuapp.com/api/users/register
// https://build-week4-backend.herokuapp.com/api/users/login

//https://redditposthere.herokuapp.com/api/auth"
