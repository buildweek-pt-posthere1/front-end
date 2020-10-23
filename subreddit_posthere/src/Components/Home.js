import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Home = () => {
  let history = useHistory();

  const logIn = () => {
    history.push("/login");
  };

  const signUp = () => {
    history.push("/signup");
  };

  return (

    {
      /* All code in this file provided by: https://github.com/PeterPyro */
    },
    (
      <div className="container">
        <div className="heroWrapper">
          <div className="textWrapper">
            <h1>Find the best place to share on Reddit</h1>
          </div>
          <div className="buttons">
            <Button
              className="btn1"
              variant="contained"
              color="default"
              onClick={signUp}
            >
              Sign Up
            </Button>
            <Button variant="contained" color="primary" onClick={logIn}>
              Log In
            </Button>

          </div>
        </div>
      </div>
    )
  );
};

export default Home;
