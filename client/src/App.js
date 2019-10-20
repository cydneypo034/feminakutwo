import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Home from './components/homeheader.js';
import About from './components/about.js';
import Parallex from './components/parellex.js';
import Shops from './components/shops.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <About />
      <Parallex />
      <Shops />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
