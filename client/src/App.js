import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './components/homeheader.js';
import CreateUser from './components/createuser.js'
import About from './components/about.js';
import Parallex from './components/parellex.js';
import Footer from './components/footer.js';
import Shops from './components/shops.js';
import VideoGames from './components/videogames.js';
import User from './components/users.js';


class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <Link to ="/">Home</Link>{ ' ' }
        <Link to={{pathname: '/about'}}>About</Link>{' '}
        <Link to="/createuser">Create User</Link>
        <Link to="/user">Users</Link>
        <Link to="/videogames">Video Games</Link>
        <Link to="/shops">Shops</Link>
        

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/createuser" component={CreateUser}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/videogames" component={VideoGames}></Route>
        <Route path="/shops" component={Shops}></Route>
      
      </Switch>
      </div>
      <Footer />

    </Router>
  );
  }
  
}

export default App;
