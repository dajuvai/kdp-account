import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import PrivateRoute from '../containers/PrivateRoute';
import Home from './Home';
import About from './About';
import ScrollToTop from './ScrollToTop';
import Login from '../containers/Login';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
