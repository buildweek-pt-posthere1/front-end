import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import * as yup from "yup";
import { findByLabelText } from "@testing-library/react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SignUp = () => {
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

  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });

  const [disable, setDisable] = useState(true);

  const formSchema = yup.object().shape({
    username: yup.string().required("Username is a required field."),
    password: yup.string().required("Password is a required field."),
  });

  useEffect(() => {
    formSchema.isValid(signUp).then((valid) => {
      console.log("valid?", valid);
      setDisable(!valid);
    });
  }, [signUp]);

  const handleChange = (event) => {
    const newValue = { ...signUp, [event.target.name]: event.target.value };
    setSignUp(newValue);
  };

  // const onSubmit =(event) => {
  //     event.preventDefault();
  //     axios
  //         .get('')
  //         .then(response => {

  //         })
  // }

  const newUser = (e) => {
    e.preventDefault();
    console.log(e);
    axiosWithAuth()
      .post("/register", signUp)
      .then((res) => {
        console.log("SignUp.js : singUp: user registered", res);
      });
  };

  return (
    <div style={container_style}>
      <div style={smallcontainer_style}>
        <img
          src="https://reddit.zendesk.com/hc/article_attachments/360062391171/Snoo_image.png"
          style={img_style}
        />
      </div>
      <div style={smallcontainer_style}>
        <form onSubmit={newUser}>
          <FormControl style={{ paddingTop: "33%" }}>
            <FormGroup style={{ margin: "5px" }}>
              <TextField
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                value={signUp.username}
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
                value={signUp.password}
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
              Welcome!
            </Button>
          </FormControl>
          <Box style={{ margin: "10px" }}>Already a user?</Box>
          <Button variant="contained" color="primary">
            Login!
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
