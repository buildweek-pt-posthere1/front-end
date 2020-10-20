import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import {
  Header,
  NavWrapper,
  LinksWrapper,
  StyledNavLink,
  ButtonWrapper,
} from "../component_styling/syling";

const Header = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.secondaryColor};
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
    cursor: pointer;

    span {
      color: ${(props) => props.theme.accentColor};

      span {
        color: ${(props) => props.theme.highlightColor};
        text-transform: uppercase;
        font-size: 1.5rem;
        border-top: 5px solid ${(props) => props.theme.highlightColor};
        display: inline-block;
        margin-right: 0.1rem;
      }
    }
  }

  @media (max-width: 1332px) {
    align-items: flex-end;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 40vw;

  @media (max-width: 1853px) {
    width: 45vw;
  }

  @media (max-width: 1721px) {
    width: 50vw;
  }

  @media (max-width: 1524px) {
    width: 55vw;
  }

  @media (max-width: 1332px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }

  &:last-child {
    position: relative;
    bottom: -18px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: center;
  width: 28vw;
  padding: 0.25rem 0;

  @media (max-width: 1853px) {
    width: 30vw;
  }

  @media (max-width: 1721px) {
    width: 34vw;
  }

  @media (max-width: 1332px) {
    width: 100%;
  }
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.45rem;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.bodyFont};
  box-sizing: border-box;
  white-space: nowrap;

  &:hover,
  &:focus,
  &:active {
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
      <Link to="/">
        <h1>
          <span>
            <span>Sub</span>Reddit
          </span>{" "}
          Predictor
        </h1>
      </Link>
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
