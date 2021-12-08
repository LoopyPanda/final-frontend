// import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdowntoggel from "react-bootstrap/DropdownToggle";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/pictures/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navigation = () => {
  return (
    // @Todo:
    // Make sure the navbar is responsive on tablets/mobile
    // Make sure the nav.items are spread out evenly across the nav
    <Navbar className="Nav">
      <Container className=" navitems d-flex justify-content-center">
        <Nav fill>
          <Nav.Item className="navstyle">
            <Link to="/home">Home</Link>
          </Nav.Item>
          <Nav.Item className="navstyle">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                  <NavDropdown
                    className="dropdown"
                    id="nav-dropdown-dark-example"
                    title="Products"
                    menuVariant="light"
                  >
                    <NavDropdown.Item>
                      <Link to="/products/1">Artprints</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/products/2">Calendars 2022</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/products/3">Postcards</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Nav.Item>
          <Nav.Item className="navstyle">
            <Nav.Link href="#About us">About Us</Nav.Link>
          </Nav.Item >
          <Nav.Item className='navstyle' >
            <Navbar.Brand href="/home">
              <img
                alt="Ab store logo"
                src={logo}
                className="d-inline-block store-logo"
              />
            </Navbar.Brand>
          </Nav.Item>
          <Nav.Item className="navstyle">
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navstyle">
            <Nav.Link href="#Login/Register">Login/Register</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navstyle">
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
