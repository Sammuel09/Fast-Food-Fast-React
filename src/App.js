import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import NotFoundPage from './Components/View/Notfound/Notfound';
import LandingPage from './Components/View/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
