import React, { Component } from 'react';
import {
  Container,
  Image,
  Menu,
  Button,
  Dropdown,
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import manageUserData from '../../../utils/auth/authentication';

const NavMenu = () => {
  const username = manageUserData.getUsername();
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
                  <p>Welcome, {username}</p>
                </Link>
              </li>
              <li className="Btn">
                <Link to="/profile">
                  <Icon name="user circle outline" size="large" />
                </Link>
              </li>
              <div className="hamburger">
                <Dropdown item icon="bars">
                  <Dropdown.Menu>
                    <Dropdown.Item text={<Link to="/search">Login</Link>} />
                    <Dropdown.Item
                      text={<Link to="/articles/new">Sign Up</Link>}
                    />
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
