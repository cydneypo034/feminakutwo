import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          <strong className="header-subtitle">Feminaku</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
            <Link to ="/">Home</Link>{ ' ' }
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/about">About</Link>{' '}
            </MDBNavItem>
            <MDBNavItem>
            <Link to="/createuser">Create User</Link>

            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
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
    </Router>
    );
  }
}

export default NavbarPage;