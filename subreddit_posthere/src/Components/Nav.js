import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

const Header = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  height: 12vh;
  align-items: baseline;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-right: 1rem;
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
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
    border-bottom: 5px solid ${(props) => props.theme.primaryColor};
    font-weight: 600;
  }
`;

const ButtonWrapper = styled.div`
  /* width: 12.5%; */
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.highlightColor};
  border-radius: ${(props) => props.theme.radius};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: ${(props) => props.theme.bodyFont};

  &:hover {
    background-color: ${(props) => props.theme.midtoneColor};
  }
`;

const SignUpButton = styled(Button)``;

const LogInButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
`;

const Nav = () => {
  let history = useHistory();

  const logIn = () => {
    history.push("/login");
  };

  const signUp = () => {
    history.push("/signup");
  };

  return (
    <Header>
      <h1>SubReddit</h1>
      <NavWrapper>
        <LinksWrapper>
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>
          <StyledNavLink exact to="/aboutUs">
            About Us
          </StyledNavLink>
          <StyledNavLink exact to="/somethingElse">
            Something Else
          </StyledNavLink>
          <StyledNavLink exact to="/someOtherThing">
            Some Other Thing
          </StyledNavLink>
        </LinksWrapper>
        <ButtonWrapper>
          <SignUpButton id="signUpButton" onClick={signUp}>
            Sign Up
          </SignUpButton>
          <LogInButton id="logInButton" onClick={logIn}>
            Log In
          </LogInButton>
        </ButtonWrapper>
      </NavWrapper>
    </Header>
  );
};

export default Nav;
