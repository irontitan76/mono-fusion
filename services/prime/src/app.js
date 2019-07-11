import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'cross-fetch/polyfill';
import ApolloClient from 'apollo-boost';
import ApolloProvider from 'react-apollo/ApolloProvider';

import ScrollToTop from './components/ScrollToTop';
import Career from './pages/career';
import Careers from './pages/careers';
import Home from './pages/home';
import Insight from './pages/insight';
import Insights from './pages/insights';
import Leadership from './pages/leadership';
import Locations from './pages/locations';
import Login from './pages/login';
import Signup from './pages/signup';
import Solutions from './pages/solutions';
import Values from './pages/values';
import './components/icons.js';

const client = new ApolloClient({ uri: process.env.RAZZLE_MONGO_DB_URI });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ScrollToTop>
        <Switch>
          <Route component={Careers} exact path='/careers/' />
          <Route component={Career} exact path='/careers/:id' />
          <Route component={Home} exact path='/' />
          <Route component={Insight} exact path='/insights/:id' />
          <Route component={Insight} exact path='/policy/:id' />
          <Route component={Insights} exact path='/insights' />
          <Route component={Leadership} exact path='/leadership' />
          <Route component={Locations} exact path='/locations' />
          <Route component={Login} exact path='/login' />
          <Route component={Signup} exact path='/signup' />
          <Route component={Solutions} exact path='/solutions' />
          <Route component={Solutions} exact path='/solutions/:id' />
          <Route component={Values} exact path='/values/:value' />
        </Switch>
      </ScrollToTop>
    </ApolloProvider>
  );
}

export default App;
