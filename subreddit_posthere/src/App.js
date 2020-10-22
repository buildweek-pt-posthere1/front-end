import React, { useState, useEffect, useRef } from "react";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
import Nav from "./Components/Nav";
import "./reset.css";
import "./App.css";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import styling from "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer style={styling} />
      </div>
    </ThemeProvider>
  );
}

export default App;
