import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://buildweek-node-auth2.herokuapp.com/api",
  });
};

//and login API : Post https://buildweek-node-auth2.herokuapp.com/api/login
//Post https://buildweek-node-auth2.herokuapp.com/api/register
