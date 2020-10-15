import React from "react";
import Nav from "./Components/Nav";
import "./App.css";
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>Subreddit Predictor</h1>
      </header>
      <Signup/>
    </div>
  );
}

export default App;
