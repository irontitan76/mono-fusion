import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import ApolloProvider from 'react-apollo/ApolloProvider';
import { withApollo } from '@fusion/design/lib/helpers';

import CssBaseline from '@material-ui/core/CssBaseline';
import StylesProvider from '@material-ui/styles/StylesProvider';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { theme } from '@fusion/design/lib/theme';
import ManifestProvider from '@fusion/design/lib/Provider/Manifest';
import PageContext from '@fusion/design/lib/Provider/PageContext';
import 'easymde/dist/easymde.min.css';

import { manifest } from '../manifest';
import Layout from '../layouts/primary';
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

  Page = () => {
    const { Component, pageProps } = this.props;
    return (
      <Layout
        bannerMessage="This site is under maintenance. Please bear with us as we optimize your experience."
        component={Link}
      >
        <Component pageContext={this.pageContext} {...pageProps} />
      </Layout>
    );
  }

  Providers = ({ children }) => {
    const { apolloClient } = this.props;
    const {
      generateClassName,
      sheetsManager,
      sheetsRegistry,
      theme,
    } = this.pageContext;

    return (
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
  }

  render() {
    return (
      <Container>
        <Head><title>{manifest.company.name}</title></Head>
        <this.Providers>
          <this.Page />
        </this.Providers>
      </Container>
    );
  }
}

export default withApollo(MyApp);
