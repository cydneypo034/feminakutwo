import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Home from './components/homeheader.js';
import About from './components/about.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <About />
    </div>
  );
}

export default App;
