import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Form, Button, Message } from 'semantic-ui-react';
import NavMenu from '../../View/NavMenu/NavMenu';
import { Link } from 'react-router-dom';
import * as authAction from '../../../action/authActions/authActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    // this.setState({
    //   hasValidationError: false
    // });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const userData = { email, password };
    const { loginUser, history } = this.props;
    loginUser(userData, history);
  };

  render() {
    const { email, password } = this.state;

    const { loginError, hasLoginError, isLoading } = this.props;

    return (
      <div>
        <NavMenu />
        <Container>
          <div className="form-container">
            {hasLoginError && loginError ? (
              <Container>
                <Message
                  error
                  size="small"
                  onDismiss={this.handleDismiss}
                  content={loginError}
                />
              </Container>
            ) : null}
            <div className="login-text">
              <p>Log into your account</p>
            </div>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  value={email}
                  onChange={this.handleFormInput}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  value={password}
                  onChange={this.handleFormInput}
                />
              </Form.Field>
              <Button
                primary
                type="submit"
                loading={isLoading}
                onClick={this.handleSubmit}
              >
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

const mapStateToProps = state => {
  const {
    authReducer: { isLoading, loginError, data, hasLoginError, isAuthenticated }
  } = state;
  return {
    isLoading,
    data,
    loginError,
    hasLoginError,
    isAuthenticated
  };
};

const mapDispatchToProps = {
  loginUser: authAction.loginUser,
  clearFlashMessage: authAction.clearFlashMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
