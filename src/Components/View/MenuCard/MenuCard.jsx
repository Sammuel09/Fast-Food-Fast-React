import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const MenuCard = props => {
  const { name, imageurl, price } = props;
  return (
    <Card>
      <Image
        src={
          imageurl
            ? imageurl
            : 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
        }
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{price}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button>Order</Button>
      </Card.Content>
    </Card>
  );
};

MenuCard.defaultProps = {
  name: '',
  price: '',
  imageurl: ''
};

export default MenuCard;
