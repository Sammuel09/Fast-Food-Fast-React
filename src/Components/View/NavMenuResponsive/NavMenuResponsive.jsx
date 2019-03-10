import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Button, Dropdown } from 'semantic-ui-react';

const NavMenuResponsive = () => {
  return (
    <div className="hamburger">
      <Dropdown item icon="bars">
        <Dropdown.Menu>
          <Dropdown.Item text={<Link to="/search">Login</Link>} />
          <Dropdown.Item text={<Link to="/articles/new">Sign Up</Link>} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NavMenuResponsive;
