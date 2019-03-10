import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const MenuCard = props => {
  console.log(props);
  const { name, imageurl, price, key } = props;
  console.log(name, imageurl, price);
  return (
    <div className="menu-card">
      <Card>
        <Image
          src={
            imageurl ||
            "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          }
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span>&#8358;</span> 
{' '}
{price}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button>Order</Button>
        </Card.Content>
      </Card>
    </div>
  );
};

MenuCard.defaultProps = {
  name: "",
  price: "",
  imageurl: ""
};

export default MenuCard;
