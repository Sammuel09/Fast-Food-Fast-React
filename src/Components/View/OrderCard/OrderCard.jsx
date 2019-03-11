import React, { Component } from "react";
import {
  Card,
  Icon,
  Image,
  Button,
  Modal,
  Header,
  Form,
  Message,
  Container
} from "semantic-ui-react";

const OrderCard = props => {
  const { name, price, quantity, deliveryinstruction, orderdate } = props;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>&#8358;</span> 
{' '}
{price}
        </Card.Meta>
        <Card.Meta>
          <span style={{ fontWeight: "bold" }}>Qty: </span>
          {quantity}
        </Card.Meta>
        <Card.Meta>
          <span style={{ fontWeight: "bold" }}>OrderDate: </span>
          {orderdate}
        </Card.Meta>
        <Card.Description>
          Delivery Instructions: 
{' '}
{deliveryinstruction}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default OrderCard;
