import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image, Container, Grid } from "semantic-ui-react";
import LoggedInNavMenu from "../../View/LoggedInNavMenu/LoggedInNavMenu";
import Footer from "../../View/Footer/Footer";
import OrderCard from "../../View/OrderCard/OrderCard";
import OrderCardLoader from "../../View/OrderCardLoader/OrderCardLoader";
import * as orderAction from "../../../action/orders/orderActions";
import manageUserData from "../../../utils/auth/authentication";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const userid = manageUserData.getUserId();
    const userId = parseInt(userid, 10);
    const { fetchUserOrderHistory } = this.props;
    await fetchUserOrderHistory(userId);
  }

  render() {
    const { isLoading, data } = this.props;
    return (
      <>
        <LoggedInNavMenu />
        <Container>
          {isLoading ? (
            <section>
              <Grid doubling columns={4}>
                <Grid.Row stretched>
                  <Grid.Column>
                    <OrderCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <OrderCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <OrderCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <OrderCardLoader />
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid stackable doubling columns={4}>
                <Grid.Row stretched>
                  <Grid.Column>
                    <OrderCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <OrderCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <OrderCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <OrderCardLoader />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </section>
          ) : (
            <section>
              <div className="call-to-action-h">
                <p>View your order history</p>
              </div>
              <Grid stackable doubling columns={4}>
                <Grid.Row stretched>
                  {data.map(order => (
                    <Grid.Column className="grid-col">
                      <OrderCard
                        name={order.name}
                        price={order.price}
                        quantity={order.quantity}
                        deliveryinstruction={order.deliveryinstruction}
                        orderdate={`${new Date(
                          order.orderdate
                        ).toDateString()} ${new Date(
                          order.orderdate
                        ).toLocaleTimeString("en-US")}`}
                      />
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            </section>
          )}
          <Footer />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {
    orderHistoryReducer: { isLoading, orderHistoryError, data, message }
  } = state;
  return {
    isLoading,
    orderHistoryError,
    data,
    message
  };
};

const mapDispatchToProps = {
  fetchUserOrderHistory: orderAction.fetchUserOrderHistory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistory);
