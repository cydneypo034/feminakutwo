import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import MyPage from './components/allpage.js';


function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <MyPage />
      <Footer /> 

    </Router>
    </div>
  );
}

export default App;
