// import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Nav from "react-bootstrap/Nav";
import logo from "../assets/pictures/logo.png"
import "./Navbar.css";


const Navigation = () => {
  return (
   
    // @Todo:
    // Make sure the navbar is responsive on tablets/mobile
    // Make sure the nav.items are spread out evenly across the nav
    <Navbar className="Nav"> 
      <Container className="d-flex justify-content-center">
        <Nav fill>
          <Nav.Item>
            <Nav.Link href="http://localhost:3000/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="http://localhost:3000/product/1">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#About us">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Navbar.Brand href="#home">
              <img
                alt="Ab store logo"
                src={logo}
                className="d-inline-block store-logo"
              />
            </Navbar.Brand>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Contact us">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Login/Register">Login/Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};


export default Navigation;
