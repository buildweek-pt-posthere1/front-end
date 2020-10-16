import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Nav from "./Components/Nav";
import "./reset.css";
import "./App.css";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import PrivateRoute from "./utils/PrivateRoute";

console.log("theme", theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/aboutUs" />
          <Route path="/somethingElse" />
          <Route path="/someOtherThing" />
          <Route exact path="/" />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
