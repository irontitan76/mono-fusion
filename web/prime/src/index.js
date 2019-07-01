import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloProvider from 'react-apollo/ApolloProvider';

import * as serviceWorker from './serviceWorker';

import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';

import theme from '@fusion/design/lib/theme.js';
import Career from './pages/career';
import Careers from './pages/careers';
import Contact from './pages/contact';
import Home from './pages/home';
import Insight from './pages/insight';
import Insights from './pages/insights';
import Leadership from './pages/leadership';
import Login from './pages/login';
import Signup from './pages/signup';
import Solutions from './pages/solutions';
import Values from './pages/values';
import './icon.config.js';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4100/api/graphql" }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route component={Careers} exact path='/careers' />
            <Route component={Career} exact path='/careers/:id' />
            <Route component={Contact} exact path='/contact' />
            <Route component={Home} exact path='/' />
            <Route component={Insight} exact path='/insights/:id' />
            <Route component={Insight} exact path='/policy/:id' />
            <Route component={Insights} exact path='/insights' />
            <Route component={Leadership} exact path='/leadership' />
            <Route component={Login} exact path='/login' />
            <Route component={Signup} exact path='/signup' />
            <Route component={Solutions} exact path='/solutions' />
            <Route component={Values} exact path='/values/:value' />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
