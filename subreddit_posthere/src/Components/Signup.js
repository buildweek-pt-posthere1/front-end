import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions/subredditActions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NavTwo from "./NavTwo";

const SignUp = (props) => {
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
    formSchema.isValid(signUp).then((valid) => {
      console.log("valid?", valid);
      setDisable(!valid);
    });
  }, [signUp]);

  const handleChange = (event) => {
    const newValue = { ...signUp, [event.target.name]: event.target.value };
    setSignUp(newValue);
  };

  const newUser = async (e) => {
    e.preventDefault();
    await props.createUser(signUp);
    push("/login");
  };

  return (
    <div className="App">
      <NavTwo />
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
                <h1>Sign Up!</h1>
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
                Sign Up!
              </Button>
            </FormControl>
            <Box style={{ margin: "10px" }}>Already a user?</Box>
            <Button variant="contained" color="primary">
              Login!
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    signUpForm: state.signUpForm,
    error: state.error,
  };
};

export default connect(mapStateToProps, { createUser })(SignUp);
