import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colorScheme from "../colorScheme";

const NavWrapper = styled.div`
  background-color: ${colorScheme.accentColor};
  display: flex;
  justify-content: flex-end;
  max-width: 100vw;
  padding: 1rem;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutUs">About Us</NavLink>
      <NavLink to="/somethingElse">Something Else</NavLink>
      <button>Sign Up</button>
      <button>Log In</button>
    </NavWrapper>
  );
};

export default Nav;
