import React, { Component } from "react";
import {
  Container,
  Image,
  Menu,
  Button,
  Dropdown,
  Icon
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import manageUserData from "../../../utils/auth/authentication";
import ProfileDropdown from "../../Container/ProfileDropdown/ProfileDropdown";
import { logout } from "../../../action/authActions/authActions";

const NavMenu = props => {
  const username = manageUserData.getUsername();
  const { history, logOutUser } = props;

  const handleLogout = e => {
    e.preventDefault();
    logOutUser();
    history.push("/");
  };

  return (
    <div className="header-bar">
      <header>
        <Container>
          <nav>
            <ul className="nav-menu">
              <li>
                <a className="logo" href="/">
                  Fast Food Fast
                </a>
              </li>
              <li className="Btn">
                {
                  <p>
                    Welcome,
                    {username}
                  </p>
                }
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
                      text={<a href="/history">History</a>}
                      style={{ color: "black" }}
                    />
                    <Dropdown.Item
                      text={(
<Link onClick={handleLogout} to="/logout">
                          Logout
</Link>
)}
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

const mapDispatchToProps = {
  logOutUser: logout
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(NavMenu));
