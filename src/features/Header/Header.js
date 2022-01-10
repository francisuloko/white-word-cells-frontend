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
    isLoggedIn ? navigate('/cells') : navigate('/')
  );

  return (
    <header className="w-100 p-0 border border-bottom">
      <Navbar collapseOnSelect expand="lg" className="p-1" bg="white" variant="light">
        <Container>
          <Navbar.Brand
            className="d-flex align-items-center cursor"
            onClick={handleClick}
          >
            <img src={logo} alt="createIcon" style={{ width: '36px' }} />
            <span className="text-dark">White Word Cells</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-end align-items-center col-lg-12">
              {isLoggedIn ? (
                <Link to="/cells" className="btn fs-6">
                  Home
                </Link>
              ) : null}
              <Link to="/about" className="btn fs-6">
                About
              </Link>
              <Link to="/how-it-works" className="btn fs-6">
                How it works
              </Link>
              {isLoggedIn ? (
                <Dropdown drop="down" autoClose="true">
                  <Dropdown.Toggle variant="" id="dropdown-autoclose-true">
                    Me
                  </Dropdown.Toggle>
                  <Dropdown.Menu align={{ lg: 'end' }} className="mt-2">
                    <Dropdown.Item to="/" onClick={logOut}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Link to="/login" className="btn fs-6">
                    Sign In
                  </Link>
                  <Link to="/signup" className="btn fs-6">
                    Sign Up
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
