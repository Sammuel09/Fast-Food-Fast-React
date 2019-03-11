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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import manageUserData from "../../../utils/auth/authentication";
import * as orderAction from "../../../action/orders/orderActions";

class MenuCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "",
      instruction: "",
      address: ""
    };
  }

  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDismiss = () => {
    const { clearFlashMessage } = this.props;
    clearFlashMessage();
  };

  handleSubmit = e => {
    e.preventDefault();
    const userid = manageUserData.getUserId();
    const userId = parseInt(userid, 10);
    const { quantity, instruction } = this.state;
    const qty = parseInt(quantity, 10);
    const { menu_id, postOrder, history } = this.props;
    const orderData = { quantity: qty, instruction, userId, menuId: menu_id };
    postOrder(orderData, history);
  };

  render() {
    const {
      name,
      imageurl,
      price,
      key,
      menu_id,
      isLoading,
      data,
      message,
      orderError
    } = this.props;
    const { quantity, instruction, address } = this.state;

    return (
      <div className="menu-card">
        <Card>
          <Image src="https://www.skinnytaste.com/wp-content/uploads/2012/10/Kale-and-Potato-Soup-with-Turkey-Sausage-4.jpg" />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span>&#8358;</span> 
{' '}
{price}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Modal trigger={<Button>Order</Button>} size="small">
              <Modal.Content>
                {message ? (
                  <Container>
                    <Message
                      className="message"
                      positive
                      onDismiss={this.handleDismiss}
                      content="Your order has been taken successfully"
                    />
                  </Container>
                ) : null}
                {orderError ? (
                  <Container>
                    <Message
                      className="error"
                      error
                      onDismiss={this.handleDismiss}
                      content={orderError}
                    />
                  </Container>
                ) : null}
                <Form>
                  <Form.Field>
                    <label>Username</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="name"
                      value={name}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Price</label>
                    <input
                      id="price"
                      type="number"
                      name="price"
                      required
                      value={price}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Quantity</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      required
                      onChange={this.handleFormInput}
                      placeholder="1"
                      value={quantity}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                      required
                      onChange={this.handleFormInput}
                      value={address}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Delivery Instruction</label>
                    <input
                      type="text"
                      name="instruction"
                      id="instruction"
                      placeholder="How should we deliver your meal"
                      required
                      onChange={this.handleFormInput}
                      value={instruction}
                    />
                  </Form.Field>
                  <Button
                    className="submit-btn"
                    primary
                    type="submit"
                    content="Order"
                    loading={isLoading}
                    onClick={this.handleSubmit}
                  />
                </Form>
              </Modal.Content>
            </Modal>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

MenuCard.defaultProps = {
  name: "",
  price: "",
  imageurl: ""
};

const mapStateToProps = state => {
  const {
    orderReducer: { isLoading, data, message, orderError }
  } = state;
  return {
    isLoading,
    data,
    message,
    orderError
  };
};

const mapDispatchToProps = {
  postOrder: orderAction.postOrder,
  clearFlashMessage: orderAction.clearFlashMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MenuCard));
