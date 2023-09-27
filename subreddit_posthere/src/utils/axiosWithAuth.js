import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://buildweekbackend-0913e30342dc.herokuapp.com/api/users",
  });
};

// https://build-week4-backend.herokuapp.com/api/users/register
