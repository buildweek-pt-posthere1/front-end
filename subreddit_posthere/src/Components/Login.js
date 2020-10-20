import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import * as yup from "yup";
import NavTwo from "./NavTwo";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login, handle_change_login } from "../actions/subredditActions";
import {container_style, smallcontainer_style, img_style} from '../component_styling/syling'

const LogIn = (props) => {
  const [disable, setDisable] = useState(true);


export default function LogIn() {
    
    // Styling
    const container_style = {
        display:"flex",
        flexDirection:'row',
        height:'100%',
        
    }
    const smallcontainer_style={
        width:'50%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        
        flexDirection:'column',
    }
    const img_style = {
        width: '85%',
        height:'85%',
        
    }
    // Styling ends

  const { push } = useHistory();


  const formSchema = yup.object().shape({
    username: yup.string().required("Username is a required field."),
    password: yup.string().required("Password is a required field."),
  });

  useEffect(() => {
    formSchema.isValid(props.loginForm).then((valid) => {
      console.log("valid?", valid);
      setDisable(!valid);
    });
  }, [props.loginForm]);

  return (
    <div className="App">
      <NavTwo />
      <div style={container_style}>
        <div style={smallcontainer_style}>
          <img
            src="https://smirknewmedia.com/wp-content/uploads/2018/03/snoo.jpg"
            style={img_style}
          />
        </div>
        <div style={smallcontainer_style}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await props.login(props.loginForm);
              push("/home");
            }}
          >
            <FormControl style={{ paddingTop: "33%" }}>
              <FormGroup style={{ margin: "5px" }}>
                <h1>Login</h1>
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  value={props.loginForm.username}
                  onChange={props.handle_change_login}
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
                  value={props.loginForm.password}
                  onChange={props.handle_change_login}
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
            <Button
              onClick={() => push("/")}
              variant="contained"
              color="primary"
            >
              {" "}
              Signup!
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginForm: state.loginForm,
    error: state.error,
  };
};

export default connect(mapStateToProps, { login, handle_change_login })(LogIn);
