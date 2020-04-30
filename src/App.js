import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./pages/home";
import SingleProject from "./pages/singleProject";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <SingleProject path="projects/:slug" />
      </Router>
    </div>
  );
}

export default App;
