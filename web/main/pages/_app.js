import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import ApolloProvider from 'react-apollo/ApolloProvider';

import CssBaseline from '@material-ui/core/CssBaseline';
import StylesProvider from '@material-ui/styles/StylesProvider';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { theme } from '@fusion/design/lib/theme';
import ManifestProvider from '@fusion/design/lib/Provider/Manifest';
import PageContext from '@fusion/design/lib/Provider/PageContext';
import { withApollo } from '@fusion/design/lib/helpers';

import { manifest } from '../manifest';
import Layout from './_layout';
import '../icon.config.js';

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = PageContext(theme);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    const {
      generateClassName,
      sheetsManager,
      sheetsRegistry,
      theme,
    } = this.pageContext;

    const Page = () => (
      <Layout
        bannerMessage="This site is under maintenance. Please bear with us as we optimize your experience."
        component={Link}
        items={manifest.navigation.items}
      >
        <Component pageContext={this.pageContext} {...pageProps} />
      </Layout>
    );

    /*
     * ThemeProvider enables its children to use the theme.
     * CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.
     * Pass pageContext to the _document though the renderPage enhancer
     *  to render collected styles on server-side.
     */

    const Providers = ({ children }) => (
      <ApolloProvider client={apolloClient}>
        <StylesProvider
          generateClassName={generateClassName}
          sheetsManager={sheetsManager}
          sheetsRegistry={sheetsRegistry}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ManifestProvider manifest={manifest}>{children}</ManifestProvider>
          </ThemeProvider>
        </StylesProvider>
      </ApolloProvider>
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

export default withApollo(MyApp);
