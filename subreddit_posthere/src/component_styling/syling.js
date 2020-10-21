import styled from "styled-components";
import { NavLink } from "react-router-dom";

//login.js and signup.js
export const container_style = {
  display: "flex",
  flexDirection: "row",
  height: "90vh",
};
export const smallcontainer_style = {
  width: "50%",
  display: "flex",
  alignItems: "center",

  flexDirection: "column",
};
export const img_style = {
  height: "100%",
};

//dashboard.js
export const Body = styled.div`
  margin-top: 5%;
  margin-left: 30%;
`;

//Nav and NavTwo

export const Header = styled.div`
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
  z-index: 999;

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
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media (max-width: 1025px) {
    flex-direction: column-reverse;
    align-items: flex-end;

    &:last-child {
      position: static;
    }

    a {
      :last-of-type {
        padding-right: 0;
      }
    }
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: center;
  padding: 0.25rem 1rem;

  @media (max-width: 1025px) {
    padding: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0.45rem;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.bodyFont};
  box-sizing: border-box;
  white-space: nowrap;
  padding: 0 0.75vw;

  &:last-of-type-of-type {
    padding-right: none;
  }

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.highlightColor};
    font-weight: 600;
  }

  @media (max-width: 1025px) {
    padding-top: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 11rem;
  display: flex;
  justify-content: space-between;
`;
