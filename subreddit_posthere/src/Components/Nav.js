import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { logout } from "../actions/subredditActions";
import {
  Header,
  NavWrapper,
  LinksWrapper,
  StyledNavLink,
  ButtonWrapper,
} from "../component_styling/syling";

const Nav = (props) => {
  let history = useHistory();

  const logIn = () => {
    history.push("/login");
  };

  const signUp = () => {
    history.push("/signup");
  };

  return (
    <Header>
      <Link to="/">
        <h1>
          <span>
            <span>Sub</span>Reddit
          </span>
          Predictor
        </h1>
      </Link>
      <NavWrapper>
        <LinksWrapper>
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>
          <StyledNavLink exact to="/aboutus">
            About Us
          </StyledNavLink>

          {props.isloggedIn && (
            <StyledNavLink exact to="/dashboard">
              Dashboard
            </StyledNavLink>
          )}
        </LinksWrapper>
        <ButtonWrapper>
          {props.isloggedIn === false ? (
            <>
              <Button variant="contained" color="default" onClick={signUp}>
                Sign Up
              </Button>
              <Button variant="contained" color="primary" onClick={logIn}>
                Log In
              </Button>
            </>
          ) : (
            false
          )}
          {props.isloggedIn && (
            <Button
              variant="contained"
              color="default"
              onClick={(e) => {
                e.preventDefault();
                props.logout();
                history.push("/login");
              }}
            >
              Logout
            </Button>
          )}
        </ButtonWrapper>
      </NavWrapper>
    </Header>
  );
};

const mapStateToProps = (state) => {
  return {
    isloggedIn: state.isloggedIn,
  };
};
export default connect(mapStateToProps, { logout })(Nav);
