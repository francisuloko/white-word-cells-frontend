import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrightnessHigh } from "react-bootstrap-icons";


const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <BrightnessHigh className="mx-2" />
            Word Mango
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="btn fs-6 text-white">
                Home
              </Link>
              <Link to="/new" className="btn fs-6 text-white">
                Add
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
