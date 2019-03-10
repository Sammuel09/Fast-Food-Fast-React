import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import LoggedInNavMenu from '../../View/LoggedInNavMenu/LoggedInNavMenu';
import Footer from '../../View/Footer/Footer';
import MenuCard from '../../View/MenuCard/MenuCard';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <LoggedInNavMenu />
        <MenuCard />

        <Footer />
      </>
    );
  }
}

export default Menu;
