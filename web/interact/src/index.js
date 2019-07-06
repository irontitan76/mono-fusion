import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloProvider from 'react-apollo/ApolloProvider';

import * as serviceWorker from './config/serviceWorker';

import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';

// import ScrollToTop from 'components/ScrollToTop';
import Home from './pages/home';
import Login from './pages/login';
import theme from './config/theme';
import './config/icon.config.js';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4100/api/graphql" }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            {/* <ScrollToTop> */}
              <Switch>
                <Route component={Home} exact path='/' />
                <Route component={Login} exact path='/login' />
              </Switch>
            {/* </ScrollToTop> */}
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
