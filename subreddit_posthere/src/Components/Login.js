import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NavTwo from "./NavTwo";
import { useHistory } from "react-router-dom";

export default function LogIn(props) {
  // Styling
  const container_style = {
    display: "flex",
    flexDirection: "row",
    height: "90vh",
  };
  const smallcontainer_style = {
    width: "50%",
    display: "flex",
    alignItems: "center",

    flexDirection: "column",
  };
  const img_style = {
    height: "100%",
  };
  // Styling ends

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [disable, setDisable] = useState(true);

  const { push } = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Username is a required field."),
    password: yup.string().required("Password is a required field."),
  });

  useEffect(() => {
    formSchema.isValid(login).then((valid) => {
      console.log("valid?", valid);
      setDisable(!valid);
    });
  }, [login]);

  const handleChange = (event) => {
    const newValue = { ...login, [event.target.name]: event.target.value };
    setLogin(newValue);
  };

  const loggingIn = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", login)
      .then((res) => {
        console.log("Login.js : login: login has worked", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/home");
      });
  };

  return (
    <div className="App">
      <NavTwo />
      <div onSubmit={loggingIn} style={container_style}>
        <div style={smallcontainer_style}>
          <img
            src="https://smirknewmedia.com/wp-content/uploads/2018/03/snoo.jpg"
            style={img_style}
          />
        </div>
        <div style={smallcontainer_style}>
          <FormControl style={{ paddingTop: "33%" }}>
            <FormGroup style={{ margin: "5px" }}>
              <h1>Login</h1>
              <TextField
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                value={login.username}
                onChange={handleChange}
                style={{ color: "white" }}
              />
            </FormGroup>
            <FormGroup style={{ margin: "5px" }}>
              <TextField
                type="password"
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                value={login.password}
                onChange={handleChange}
                style={{ color: "white" }}
              />
            </FormGroup>
            <Button
              disabled={disable}
              type="submit"
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
          </FormControl>
          <Box style={{ margin: "10px" }}>Not a user?</Box>
          <Button onClick={() => push("/")} variant="contained" color="primary">
            {" "}
            Signup!
          </Button>
        </div>
      </div>
    </div>
  );
}
