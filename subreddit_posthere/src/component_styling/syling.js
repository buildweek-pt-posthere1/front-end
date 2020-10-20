import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

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

export const NavWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 40vw;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: center;
  width: 28vw;
  padding: 0.25rem 0;
`;

export const StyledNavLink = styled(NavLink)`
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

export const ButtonWrapper = styled.div`
  width: 11rem;
  display: flex;
  justify-content: space-between;
`;