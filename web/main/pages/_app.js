import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import ApolloProvider from 'react-apollo/ApolloProvider';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import { getTheme } from '@fusion/design/lib/theme';
import ManifestProvider from '@fusion/design/lib/Provider/Manifest';
import { withApollo } from '@fusion/design/lib/helpers';

import { manifest } from '../manifest';
import Layout from '../components/layout';
import '../icon.config.js';

class MyApp extends App {
  constructor() {
    super();

    this.state = {
      tint: getTheme('light').palette.type,
    };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { tint } = this.state;
    const { Component, pageProps, apolloClient } = this.props;

    const updatedTheme = getTheme(tint);

    const Page = () => (
      <Layout
        bannerMessage="This site is under maintenance. Please bear with us as we optimize your experience."
        component={Link}
        items={manifest.navigation.items}
      >
        <Component {...pageProps} />
      </Layout>
    );

    /*
     * ThemeProvider enables its children to use the theme.
     * CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.
     * Pass pageContext to the _document though the renderPage enhancer
     *  to render collected styles on server-side.
     */

    const Providers = ({ children }) => (
      <ManifestProvider manifest={manifest}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={updatedTheme}>
            <CssBaseline />
              {children}
          </ThemeProvider>
        </ApolloProvider>
      </ManifestProvider>
    );

    return (
      <Container>
        <Head>
          <title>{manifest.company.name}</title>
        </Head>
        <Providers>
          <Page />
        </Providers>
      </Container>
    );
  }
}

export default withApollo(MyApp, { uri: "https://api.graph.cool/simple/v1/cjv8u8vxs0dfu0192op18chtu" });
