import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import {
  Header,
  NavWrapper,
  LinksWrapper,
  StyledNavLink,
  ButtonWrapper,
} from "../component_styling/syling";

const Nav = () => {
  let history = useHistory();

  console.log(history.location.pathname);

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const logIn = () => {
    history.push("/login");
  };

  const signUp = () => {
    history.push("/signup");
  };

  return (
    <Header>
      <Link to="/home">
        <h1>
          <span>
            <span>Sub</span>Reddit
          </span>
          Predictor
        </h1>
      </Link>
      <NavWrapper>
        <LinksWrapper>
          <StyledNavLink exact to="/home">
            Home
          </StyledNavLink>
          <StyledNavLink exact to="/aboutUs">
            About Us
          </StyledNavLink>

          {/****** If token is blank don't render this, otherwise, render it **********/}
          <StyledNavLink exact to="/dashboard">
            Dashboard
          </StyledNavLink>
          {/****** If token is blank don't render this, otherwise, render it **********/}
        </LinksWrapper>
        <ButtonWrapper>
          <Button variant="contained" color="default" onClick={signUp}>
            Sign Up
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick /* If token is blank, invoke Log In function, otherwise invoke Log Out function */={
              logIn
            }
          >
            {/* If token is blank, say "Log In", otherwise say "Log Out" */}
            Log In
          </Button>
        </ButtonWrapper>
      </NavWrapper>
    </Header>
  );
};

export default Nav;
