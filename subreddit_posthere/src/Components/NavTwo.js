import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import {Header, NavWrapper, LinksWrapper, ButtonWrapper} from '../component_styling/syling'


const NavTwo = () => {
  let history = useHistory();

  const logIn = () => {
    history.push("/login");
  };

  const signUp = () => {
    history.push("/");
  };

  return (
    <Header>
      <h1>SubReddit Predictor</h1>
      <NavWrapper>
        <LinksWrapper></LinksWrapper>
        <ButtonWrapper>
          <Button variant="contained" color="default" onClick={signUp}>
            Sign Up
          </Button>
          <Button variant="contained" color="primary" onClick={logIn}>
            Log In
          </Button>
        </ButtonWrapper>
      </NavWrapper>
    </Header>
  );
};

export default NavTwo;
