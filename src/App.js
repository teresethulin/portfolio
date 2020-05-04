import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/home";
import SingleProject from "./pages/singleProject";

function App() {
  return (
    <Router>
      <Home path="/" />
      <SingleProject path="/:slug" />
    </Router>
  );
}

export default App;
