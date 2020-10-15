import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Nav from "./Components/Nav";
import "./reset.css";
import "./App.css";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login">This should go to the Log In Page</Route>
        <Route path="/signup">This should go to the Sign Up Page</Route>
        <Route path="/dashboard">This should go to the Dashboard Page</Route>
        <Route path="/">This should go to the Marketing AKA Home Page</Route>
      </Switch>
    </div>
  );
}

export default App;
