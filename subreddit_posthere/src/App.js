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
        <Switch>

          <PrivateRoute exact path="/Home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/About Us" />
          <Route path="/someOtherThing" />
          <Route exact path="/" component={Signup} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
