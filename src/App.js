import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import NotFoundPage from './Components/View/Notfound/Notfound';
import LandingPage from './Components/View/LandingPage/LandingPage';
import SignUpPage from './Components/Container/SignupPage/SignupPage';
import LoginPage from './Components/Container/LoginPage/LoginPage';
import Menu from './Components/Container/Menu/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/menu" component={Menu} />
            <Route component={NotFoundPage} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
