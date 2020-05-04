import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/home";
import SingleProject from "./pages/singleProject";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./components/Menu";
import Burger from "./components/Burger";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Router>
        <Home path="/" />
        <SingleProject path="/:slug" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;
