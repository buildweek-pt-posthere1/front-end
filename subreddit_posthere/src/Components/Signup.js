import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import {
  container_style,
  smallcontainer_style,
  img_style,
} from "../component_styling/syling";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createUser, handle_change_signup } from "../actions/subredditActions";
import NavTwo from "./NavTwo";

const SignUp = (props) => {
  const [disable, setDisable] = useState(true);

  // Styling
  const container_style = {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  };
  const smallcontainer_style = {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };
  const img_style = {
    width: "50%",
    height: "50%",
  };
  // Styling ends

  const { push } = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Username is a required field."),
    password: yup.string().required("Password is a required field."),
  });

  useEffect(() => {
    formSchema.isValid(props.signUpForm).then((valid) => {
      console.log("valid?", valid);
      setDisable(!valid);
    });
  }, [props.signUpForm]);

  return (
    <div>
      <div style={container_style}>
        <div style={smallcontainer_style}>
          <img
            src="https://reddit.zendesk.com/hc/article_attachments/360062391171/Snoo_image.png"
            style={img_style}
          />
        </div>
        <div style={smallcontainer_style}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await props.createUser(props.signUpForm);
              push("/login");
            }}
          >
            <FormControl style={{ paddingTop: "33%" }}>
              <FormGroup style={{ margin: "5px" }}>
                <h1>Sign Up!</h1>
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  value={props.signUpForm.username}
                  onChange={props.handle_change_signup}
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
                  value={props.signUpForm.password}
                  onChange={props.handle_change_signup}
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

export default connect(mapStateToProps, {
  createUser,
  handle_change_signup,
})(SignUp);
