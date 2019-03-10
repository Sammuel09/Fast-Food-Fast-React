import React, { Component } from 'react';
import { Container, Image, Form, Button } from 'semantic-ui-react';
import NavMenu from '../../View/NavMenu/NavMenu';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavMenu />
        <Container>
          <div className="form-container">
            <div className="login-text">
              <p>Log into your account</p>
            </div>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input type="email" name="email" required placeholder="email" />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                />
              </Form.Field>
              <Button primary type="submit">
                Submit
              </Button>
              <div className="login-text">
                <p>
                  New User?{' '}
                  <Link to="/signup">
                    <p>Create an Account</p>
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
