import React from "react";
import {  useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import {Header, NavWrapper, LinksWrapper, StyledNavLink, ButtonWrapper} from '../component_styling/syling'


const Nav = () => {
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <Header>
      <h1>SubReddit Predictor</h1>
      <NavWrapper>
        <LinksWrapper>
          <StyledNavLink exact to="/Home">
            Home
          </StyledNavLink>
          <StyledNavLink exact to="/aboutUs">
            About Us
          </StyledNavLink>
          <StyledNavLink exact to="/dashboard">
            Dashboard
          </StyledNavLink>
          <StyledNavLink exact to="/someOtherThing">
            Some Other Thing
          </StyledNavLink>
        </LinksWrapper>
        <ButtonWrapper>
          <Button variant="contained" color="default" onClick={logout}>
            Logout
          </Button>
        </ButtonWrapper>
      </NavWrapper>
    </Header>
  );
};

export default Nav;
