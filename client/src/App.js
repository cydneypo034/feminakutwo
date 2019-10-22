import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBNavbarNav, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, 
  MDBDropdownItem, MDBNavLink, MDBIcon, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import Home from './components/homeheader.js';
import CreateUser from './components/createuser.js'
import Footer from './components/footer.js';
import Shops from './components/shops.js';
import VideoGames from './components/videogames.js';
import User from './components/users.js';


class App extends React.Component {
  
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
    <Router>
      <div>
      <MDBNavbar color="black" dark expand="md">
      <MDBNavbarBrand>
        
          <strong className="header-subtitle">Feminaku</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
        
        <MDBNavItem active >
        <Link to ="/" className="nav-subtitle">Home </Link>
        </MDBNavItem>
        
        <MDBNavItem >
        <Link to="/createuser" className="nav-subtitle" >Create User </Link>
        </MDBNavItem>

        <MDBNavItem >
        <Link to="/user" className="nav-subtitle">Users </Link>
        </MDBNavItem>

        <MDBNavItem >
        <Link to="/videogames" className="nav-subtitle">Video Games </Link>
        </MDBNavItem>

        <MDBNavItem >
        <Link to="/shops" className="nav-subtitle">Shops </Link>
        </MDBNavItem>

        <MDBNavItem>
              <MDBDropdown className="nav-subtitle">
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Where to Watch Anime</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem><a href="https://www.crunchyroll.com/">Crunchyroll</a></MDBDropdownItem>
                <MDBDropdownItem><a href="https://www.funimation.com/">Funimation</a></MDBDropdownItem>
                <MDBDropdownItem><a href="https://www.netflix.com/">Netflix</a></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
            <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="instagram" />
                </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook" />
                </MDBNavLink>
            </MDBNavItem>
            
          </MDBNavbarNav>

          </MDBCollapse>
        </MDBNavbar>

      <Switch>
        <Route exact path="/" component={Home}></Route>
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
