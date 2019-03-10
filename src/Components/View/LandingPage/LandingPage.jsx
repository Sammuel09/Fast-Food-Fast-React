import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Button, Dropdown } from 'semantic-ui-react';
import NavMenu from '../NavMenu/NavMenu';
import NavMenuResponsive from '../NavMenuResponsive/NavMenuResponsive';

const LandingPage = () => {
  return (
    <div>
      <div className="banner">
        <NavMenu />
        {/* <header>
          <Container>
            <nav>
              <ul className="nav-menu">
                <li>
                  <a href="/">Fast Food Fast</a>
                </li>
                <li className="Btn">
                  <Link to="/login">
                    <Button primary className="btn" compact active mini>
                      Login
                    </Button>
                  </Link>
                </li>
                <li className="Btn">
                  <Link to="/signup">
                    <Button compact mini>
                      SignUp
                    </Button>
                  </Link>
                </li>
                <div className="hamburger">
                  <Dropdown item icon="bars">
                    <Dropdown.Menu>
                      <Dropdown.Item text={<Link to="/search">Login</Link>} />
                      <Dropdown.Item
                        text={<Link to="/articles/new">Sign Up</Link>}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </ul>
            </nav>
          </Container>
        </header> */}
        <section>
          <div className="headline-text">
            <p>Tasty Yummy Foods</p>
            <p>Delivered to your doorsteps</p>
            <Link to="/signup">
              <Button style={{ color: '#c5515a' }}>Get Started</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
