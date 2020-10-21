import React from "react";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import "./reset.css";
import "./App.css";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./Components/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About Us" />

          {/****** If token is blank don't render this, otherwise, render it **********/}
          <Route path="/Dashboard" component={Dashboard} />
          {/****** If token is blank don't render this, otherwise, render it **********/}

          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
