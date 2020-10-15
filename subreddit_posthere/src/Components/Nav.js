import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const NavWrapper = styled.div`
  background-color: ${(props) => props.theme.mutedAccentColor};
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  max-width: 100vw;
  padding: 1rem;
`;

const LinkWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-right: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  /* padding: 0.5rem 0px; */
  box-sizing: border-box;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.highlightColor};
    border-bottom: 5px solid ${(props) => props.theme.primaryColor};
  }
`;

const ButtonWrapper = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.highlightColor};
  border-radius: ${(props) => props.theme.radius};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.midtoneColor};
  }
`;

const SignUpButton = styled(Button)``;

const LogInButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
`;

const Nav = () => {
  return (
    <NavWrapper>
      <LinkWrapper>
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
      </LinkWrapper>
      <ButtonWrapper>
        <SignUpButton id="signUpButton">Sign Up</SignUpButton>
        <LogInButton id="logInButton">Log In</LogInButton>
      </ButtonWrapper>
    </NavWrapper>
  );
};

export default Nav;
