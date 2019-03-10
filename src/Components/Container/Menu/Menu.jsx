import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image, Container, Grid } from "semantic-ui-react";
import LoggedInNavMenu from "../../View/LoggedInNavMenu/LoggedInNavMenu";
import Footer from "../../View/Footer/Footer";
import MenuCard from "../../View/MenuCard/MenuCard";
import MenuCardLoader from "../../View/MenuCardLoader/MenuCardLoader";
import * as menuAction from "../../../action/menu/menuAction";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { fetchMenu } = this.props;
    await fetchMenu();
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
                    <MenuCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <MenuCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <MenuCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <MenuCardLoader />
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid stackable doubling columns={4}>
                <Grid.Row stretched>
                  <Grid.Column>
                    <MenuCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <MenuCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <MenuCardLoader />
                  </Grid.Column>
                  <Grid.Column>
                    <MenuCardLoader />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </section>
          ) : (
            <section>
              <div className="call-to-action">
                <p>Order delicious food online!</p>
              </div>
              <Grid stackable doubling columns={4}>
                <Grid.Row stretched>
                  {data.slice(0, 4).map(menu => (
                    <Grid.Column>
                      <MenuCard
                        key={menu.menu_id}
                        name={menu.name}
                        price={menu.price}
                        imageurl={menu.imageurl}
                      />
                    </Grid.Column>
                  ))}
                </Grid.Row>

                <Grid.Row stretched>
                  <Grid.Column>
                    <MenuCard />
                  </Grid.Column>
                  <Grid.Column>
                    <MenuCard />
                  </Grid.Column>
                  <Grid.Column>
                    <MenuCard />
                  </Grid.Column>
                  <Grid.Column>
                    <MenuCard />
                  </Grid.Column>
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
    menuReducer: { isLoading, menuError, data, message }
  } = state;
  return {
    isLoading,
    menuError,
    data,
    message
  };
};

const mapDispatchToProps = {
  fetchMenu: menuAction.fetchMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
