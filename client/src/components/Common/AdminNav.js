import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";

class AdminNavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <Logo logoSpin="App-logo" navLogo="Nav-logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-uppercase" navbar>
              <NavItem>
                <NavLink tag={Link} to="/addMeetup" aria-label="Add Meetup">
                  <FontAwesomeIcon icon="plus" /> Add Meetup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signup" aria-label="Signup">
                  <FontAwesomeIcon icon="user-plus" /> Signup
                </NavLink>
              </NavItem>
              {this.props.authenticated ? (
                <NavItem>
                  <NavLink tag={Link} to="/logout" aria-label="Logout">
                    <FontAwesomeIcon icon="sign-out-alt" />
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink tag={Link} to="/login" aria-label="Login">
                    <FontAwesomeIcon icon="sign-in-alt" /> Login
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export { AdminNavigationBar };
