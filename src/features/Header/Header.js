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
  const { isLoggedIn, user } = useSelector((state) => state.auth);
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
            <Nav className="d-flex justify-content-end align-items-center col-lg-12">
              { isLoggedIn ? (
                <Link to="/cells" className="btn fs-6">
                  Home
                </Link>
              ) : (
                null
              )}
              <Link to="/about" className="btn fs-6">
                About
              </Link>
              <Link to="/how-it-works" className="btn fs-6">
                How it works
              </Link>
              { isLoggedIn ? (
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    { user }
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
                null
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
