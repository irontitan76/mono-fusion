import React from 'react';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

export const serverSideRendering = (function() {
  try {
    return !(document !== undefined);
  } catch (e) {
    return true;
  }
})();

export const getCookie = (cname) => {
  if (serverSideRendering) return null;

  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    const c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const setCookie = (cname, cvalue, exdays) => {
  if (serverSideRendering) return null;

  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

let apolloClient = null;

function create(initialState, opts) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    shouldBatch: true,
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: opts ? opts.uri : "http://localhost:4100/api/graphql",
      // uri: 'https://api.graph.cool/simple/v1/cjv8u8vxs0dfu0192op18chtu', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: !process.browser && fetch,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export function initApollo(initialState, opts) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, opts);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, opts);
  }

  return apolloClient;
}

export const withApollo = (App, options) => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)';
    static async getInitialProps(ctx) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = initApollo(props.apolloState, options);
    }

    render() {
      return (
        <App
          {...this.props}
          apolloClient={this.apolloClient}
        />
      );
    }
  };
};
