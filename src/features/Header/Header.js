import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
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
          <Link to="/new" className="btn fs-6 text-white">
            <Button>Create</Button>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center">
              <Link to="/" className="btn fs-6 text-white">
                Home
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
