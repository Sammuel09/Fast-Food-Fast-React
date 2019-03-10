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

const Footer = () => {
  return (
    <Container>
      <div>
        <footer>
          Fast-Food-Fast: Food delivery at your fingertips. Copyright © 2018
        </footer>
      </div>
    </Container>
  );
};

export default Footer;
