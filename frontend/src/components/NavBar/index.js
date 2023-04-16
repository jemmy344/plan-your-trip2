import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './navbar.css';
const NavBar = () => {
  return (
    <Navbar bg="none" variant="light" expand="md">
      <Container>
        <Navbar.Brand>
          <h1 className="logo">
            PlanYourTrip
          </h1>
          {/* <img
            src="https://via.placeholder.com/50"
            height="30"
            className="d-inline-block align-top"
            alt="Logo placeholder"
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar-text">
          <Nav className="ms-auto navbar-text">
            <Nav.Link  href="#">Home</Nav.Link>
            <Nav.Link href="#">Product</Nav.Link>
            <Nav.Link href="#">Resources</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
