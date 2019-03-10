import React, { Component } from "react";
import {
  Container,
  Image,
  Menu,
  Button,
  Dropdown,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import manageUserData from "../../../utils/auth/authentication";
import ProfileDropdown from "../../Container/ProfileDropdown/ProfileDropdown";

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
                <p>
                  Welcome,
                  {username}
                </p>
              </li>
              <li className="Btn">
                <div className="dropdown">
                  <Icon
                    className="icon"
                    name="user circle outline"
                    size="large"
                  />
                  <ProfileDropdown />
                </div>
              </li>
              <div className="hamburger">
                <Dropdown item icon="bars">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text={<a href="/profile">Profile</a>}
                      style={{ color: "black" }}
                    />
                    <Dropdown.Item text={<Link to="/">Logout</Link>} />
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
