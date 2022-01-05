/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container, Nav, Navbar, Dropdown,
} from 'react-bootstrap';
import logo from '../../wwc.png';
import { logout } from '../../slices/auth';
import EventBus from '../../common/EventBus';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [isLoggedIn, logOut]);

  const handleClick = () => (
    isLoggedIn ? navigate('cells') : navigate('/')
  );

  return (
    <header className="w-100 border border-bottom">
      <Navbar bg="white" variant="light" expand="lg">
        <Container>
          <Navbar.Brand
            className="d-flex align-items-center cursor"
            onClick={handleClick}
          >
            <img src={logo} alt="createIcon" style={{ width: '36px' }} />
            <span className="text-dark">White Word Cells</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center col-lg-12">
              { isLoggedIn ? (
                <Link to="/cells" className="btn fs-6">
                  Home
                </Link>
              ) : (
                <Link to="/" className="btn fs-6">
                  Welcome
                </Link>
              )}
              <Link to="/about" className="btn fs-6">
                How it works
              </Link>
              <Link to="/about" className="btn fs-6">
                About
              </Link>
              { isLoggedIn ? (
                <Dropdown className="ms-lg-auto">
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to="/settings" className="nav-link">
                      Settings
                    </Link>
                    <hr />
                    <Link to="/" className="nav-link" onClick={logOut}>
                      Logout
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div className="ms-lg-auto">
                  <Link to="/login" className="btn fs-6">
                    Login
                  </Link>
                  <Link to="/signup" className="btn fs-6">
                    Sign Up
                  </Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
