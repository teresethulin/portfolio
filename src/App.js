import React from 'react';
import { Router } from '@reach/router';
import './App.scss';
import Home from './pages/home';
import SingleProject from './pages/singleProject';
import About from './pages/about';
import Contact from './pages/contact';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Home path="/" />
        <SingleProject path="/:slug" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
