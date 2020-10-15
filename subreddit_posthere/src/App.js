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

console.log("theme", theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/login">This should go to the Log In Page</Route>
          <Route path="/signup">This should go to the Sign Up Page</Route>
          <Route path="/aboutUs">This should go to the About Us Page</Route>
          <Route path="/somethingElse">
            This should go to the Something Else Page
          </Route>
          <Route path="/someOtherThing">
            This should go to the Some Other Thing Page
          </Route>
          <Route exact path="/">
            This should go to the Marketing AKA Home Page
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
