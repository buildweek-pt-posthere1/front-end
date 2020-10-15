import React from "react";
import Nav from "./Components/Nav";
import "./App.css";
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>Subreddit Predictor</h1>
      </header>
      <Login/>
    </div>
  );
}

export default App;
