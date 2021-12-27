import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../wwc.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed-top w-100 border border-bottom">
      <Navbar bg="white" variant="light" expand="lg">
        <Container>
          <Navbar.Brand
            className="d-flex align-items-center"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="createIcon"
              style={{ width: "36px" }}
            />
            <span className="d-none d-md-inline text-dark">
              White Word Cells
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center">
              <Link to="/" className="btn fs-6">
                Home
              </Link>
              <Link to="/about" className="btn fs-6">
                How it works
              </Link>
              <Link to="/about" className="btn fs-6">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
