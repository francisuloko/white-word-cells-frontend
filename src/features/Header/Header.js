import React, { useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import logo from "../../wwc.png";
import { logout } from "../slices/auth";
import EventBus from "../common/EventBus";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <header className="fixed-top w-100 border border-bottom">
      <Navbar bg="white" variant="light" expand="lg">
        <Container>
          <Navbar.Brand
            className="d-flex align-items-center cursor"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="createIcon" style={{ width: "36px" }} />
            <span className="text-dark">White Word Cells</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center col-lg-12">
              {currentUser ? (
                <Link to="/home" className="btn fs-6">
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
              <Dropdown className="ms-lg-auto">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  {currentUse.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item key={1}>
                    <Link to={"/profile"} className="nav-link">
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item key={2}>
                    <Link to={"/login"} className="nav-link" onClick={logOut}>
                      Logout
                    </Link>
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
