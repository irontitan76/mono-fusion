import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import './components/icons.js';

const App = () => {
  return (
    // <ScrollToTop>
      <Switch>
        <Route component={Home} exact path='/' />
      </Switch>
    // </ScrollToTop>
  );
}

export default App;
