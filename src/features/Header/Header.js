import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container, Nav, Navbar, Dropdown,
} from 'react-bootstrap';
import logo from '../../wwc.png';
import { logout } from '../../slices/auth';

const Header = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => (
    isLoggedIn ? navigate('/cells') : navigate('/')
  );

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        localStorage.removeItem('whiteWordCellsUser');
      });

    setExpanded(false);
  };

  return (
    <header className="sticky-top p-0 border border-bottom">
      <Navbar expanded={expanded} expand="lg" className="p-1" bg="white" variant="light">
        <Container>
          <Navbar.Brand
            className="d-flex align-items-center cursor"
            onClick={handleClick}
          >
            <img src={logo} alt="createIcon" style={{ width: '36px' }} />
            <span className="text-dark">White Word Cells</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-end align-items-center col-lg-12">
              {isLoggedIn ? (
                <Link to="/cells" className="btn fs-6" onClick={() => setExpanded(false)}>
                  Home
                </Link>
              ) : null}
              <Link to="/about" className="btn fs-6" onClick={() => setExpanded(false)}>
                About
              </Link>
              <Link to="/how-it-works" className="btn fs-6" onClick={() => setExpanded(false)}>
                How it works
              </Link>
              {isLoggedIn ? (
                <Dropdown drop="down" autoClose="true">
                  <Dropdown.Toggle variant="" id="dropdown-autoclose-true">
                    { user.name }
                  </Dropdown.Toggle>
                  <Dropdown.Menu align={{ lg: 'end' }} className="mt-2">
                    <Dropdown.Item to="/" onClick={handleLogout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Link to="/login" className="btn fs-6" onClick={() => setExpanded(false)}>
                    Sign In
                  </Link>
                  <Link to="/signup" className="btn fs-6" onClick={() => setExpanded(false)}>
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
