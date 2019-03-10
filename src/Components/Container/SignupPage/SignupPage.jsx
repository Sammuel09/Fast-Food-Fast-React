import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Form, Button, Message } from 'semantic-ui-react';
import NavMenu from '../../View/NavMenu/NavMenu';
import { Link } from 'react-router-dom';
import { validateSignUpInput } from '../../../utils/validation/signup';
import * as signupAction from '../../../action/signupAction/signupAction';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValidationError: false,
      errors: [],
      username: '',
      email: '',
      phone: '',
      address: '',
      password: ''
    };
  }

  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
      hasValidationError: false
    });
  };

  handleDismiss = () => {
    const { clearFlashMessage } = this.props;
    clearFlashMessage();
    this.setState({
      hasValidationError: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, phone, address, password } = this.state;
    const { signUpUser, history } = this.props;
    const userData = { username, email, phone, address, password };
    const errors = validateSignUpInput(userData);
    if (errors.length >= 1) {
      this.setState({
        hasValidationError: true,
        errors
      });
      console.log(errors);
      return;
    }
    signUpUser(userData, history);
    console.log('event');
  };

  render() {
    const {
      username,
      email,
      phone,
      address,
      password,
      errors,
      hasValidationError
    } = this.state;
    const { signUpError, hasSignUpError, isLoading } = this.props;
    console.log(hasSignUpError, '....', signUpError);
    return (
      <div>
        <NavMenu />
        <Container>
          <div className="form-container">
            {hasSignUpError && signUpError ? (
              <Container>
                <Message
                  error
                  size="small"
                  onDismiss={this.handleDismiss}
                  content={signUpError}
                />
              </Container>
            ) : null}
            {hasValidationError && errors ? (
              <Container>
                <Message
                  error
                  size="small"
                  list={errors}
                  onDismiss={this.handleDismiss}
                />
              </Container>
            ) : null}

            <div className="login-text">
              <p>Register a new account</p>
            </div>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="Username"
                  onChange={this.handleFormInput}
                  value={username}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  onChange={this.handleFormInput}
                  value={email}
                />
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
                  onChange={this.handleFormInput}
                  value={phone}
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
                <label>Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  onChange={this.handleFormInput}
                  value={password}
                />
              </Form.Field>
              <Button
                className="submit-btn"
                primary
                type="submit"
                content="Submit"
                loading={isLoading}
                onClick={this.handleSubmit}
              />

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

const mapStateToProps = state => {
  const {
    signupReducer: {
      isLoading,
      signUpError,
      data,
      message,
      visible,
      hasSignUpError,
      isAuthenticated
    }
  } = state;
  return {
    isLoading,
    data,
    signUpError,
    message,
    visible,
    hasSignUpError,
    isAuthenticated
  };
};

const mapDispatchToProps = {
  signUpUser: signupAction.signUpUser,
  clearFlashMessage: signupAction.clearFlashMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
