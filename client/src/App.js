import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Home from './components/homeheader.js';
import About from './components/about.js';
import Parallex from './components/parellex.js';
import Shops from './components/shops.js';
import User from './components/users.js';
import Footer from './components/footer.js';
import VideoGames from './components/videogames.js';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Parallex />
      <User />
      <Shops />
      <VideoGames />
      <Footer /> 


    </div>
  );
}

export default App;
