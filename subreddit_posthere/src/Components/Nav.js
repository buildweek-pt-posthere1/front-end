import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Header = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 2rem;
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  h1 {
    font-family: ${(props) => props.theme.headerFont};
    font-size: 3rem;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 40vw;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: center;
  width: 28vw;
  padding: 0.25rem 0;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.45rem;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.bodyFont};
  box-sizing: border-box;
  white-space: nowrap;

  &:visited {
    color: inherit;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.highlightColor};
    font-weight: 600;
  }
`;

const ButtonWrapper = styled.div`
  width: 11rem;
  display: flex;
  justify-content: space-between;
`;

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
