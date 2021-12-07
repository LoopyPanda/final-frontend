// import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdowntoggel from "react-bootstrap/DropdownToggle";
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from "react-bootstrap/Nav";
import logo from "../assets/pictures/logo.png"
import "./Navbar.css";


const Navigation = () => {
  return (

    // @Todo:
    // Make sure the navbar is responsive on tablets/mobile
    // Make sure the nav.items are spread out evenly across the nav
    <Navbar className="Nav">
      <Container className=" navitems d-flex justify-content-center">
        <Nav fill>
          <Nav.Item className='navstyle'>
            <Nav.Link href="http://localhost:3000/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navstyle'>
            <Navbar variant="light" bg="none" expand="lg">
              <Container fluid>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Products"
                      menuVariant="light">
                      <NavDropdown.Item href="http://localhost:3000/products/1">Artprints</NavDropdown.Item>
                      <NavDropdown.Item href="http://localhost:3000/products/2">Postcards</NavDropdown.Item>
                      <NavDropdown.Item href="http://localhost:3000/products/3">Calender-2022</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Nav.Item>
          <Nav.Item className='navstyle'>
            <Nav.Link href="#About us">About Us</Nav.Link>
          </Nav.Item >
          <Nav.Item className='navstyle' >
            <Navbar.Brand href="#home">
              <img
                alt="Ab store logo"
                src={logo}
                className="d-inline-block store-logo"
              />
            </Navbar.Brand>
          </Nav.Item>
          <Nav.Item className='navstyle'>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navstyle'>
            <Nav.Link href="#Login/Register">Login/Register</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navstyle'>
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};


export default Navigation;
