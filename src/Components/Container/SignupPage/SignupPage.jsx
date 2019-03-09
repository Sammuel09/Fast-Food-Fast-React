import React, { Component } from 'react';
import { Container, Image, Form, Button } from 'semantic-ui-react';
import NavMenu from '../../View/NavMenu/NavMenu';
import { Link } from 'react-router-dom';

class SignUpPage extends Component {
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
              <p>Register a new account</p>
            </div>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="Username"
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input type="email" name="email" required placeholder="email" />
              </Form.Field>
              <Form.Field>
                <label>Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="081-4567-7890"
                  pattern="[0-9]{ 3 }-[0-9]{ 4 }-[0-9]{ 4 }"
                  required
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
                />
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
                  Already have an account?{' '}
                  <Link to="/login">
                    <p>Login</p>
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

export default SignUpPage;
