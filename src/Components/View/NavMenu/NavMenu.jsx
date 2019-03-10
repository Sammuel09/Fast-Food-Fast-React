import React, { Component } from "react";
import { Container, Image, Menu, Button, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="header-bar">
      <header>
        <Container>
          <nav>
            <ul className="nav-menu">
              <li>
                <a href="/">Fast Food Fast</a>
              </li>
              <li className="Btn">
                <Link to="/login">
                  <Button
                    style={{ color: "#c5515a" }}
                    className="btn"
                    compact
                    active
                    mini
                  >
                    Login
                  </Button>
                </Link>
              </li>
              <li className="Btn">
                <Link to="/signup">
                  <Button style={{ color: "#c5515a" }} compact mini>
                    SignUp
                  </Button>
                </Link>
              </li>
              <div className="hamburger">
                <Dropdown item icon="bars">
                  <Dropdown.Menu>
                    <Dropdown.Item text={<Link to="/login">Login</Link>} />
                    <Dropdown.Item text={<Link to="/signup">Sign Up</Link>} />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </ul>
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default NavMenu;
