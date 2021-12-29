import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container, Nav, Navbar, Dropdown,
} from 'react-bootstrap';
import logo from '../../wwc.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed-top w-100 border border-bottom">
      <Navbar bg="white" variant="light" expand="lg">
        <Container>
          <Navbar.Brand
            className="d-flex align-items-center cursor"
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="createIcon" style={{ width: '36px' }} />
            <span className="text-dark">White Word Cells</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center col-lg-12">
              <Link to="/" className="btn fs-6">
                Home
              </Link>
              <Link to="/about" className="btn fs-6">
                How it works
              </Link>
              <Link to="/about" className="btn fs-6">
                About
              </Link>
              <Dropdown className="ms-lg-auto">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  User
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item key={1} href="/">
                    Settings
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item key={2} href="/">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
