import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from '@fusion/design/Layout';
import ManifestProvider from '@fusion/design/Provider/Manifest';
import PageContext from '@fusion/design/Provider/PageContext';
import { manifest } from '@fusion/client/helpers/me.manifest';
import { theme } from '@fusion/client/helpers/theme';
import '@fusion/client/me/icon.config.js';

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
    const { Component, pageProps } = this.props;
    const {
      generateClassName,
      sheetsManager,
      sheetsRegistry,
      theme,
    } = this.pageContext;

    const Page = () => (
      <Layout
        // bannerMessage='This site is under maintenance. Please bear with us as we optimize your experience.'
        component={Link}
        items={manifest.navigation.items}
        TopBarProps={{
          color: 'default',
        }}
      >
        <Component pageContext={this.pageContext} {...pageProps} />
      </Layout>
    );

    const Providers = ({ children }) => (
      <StylesProvider
        generateClassName={generateClassName}
        sheetsManager={sheetsManager}
        sheetsRegistry={sheetsRegistry}
      >
        {/* ThemeProvider enables its children to use the theme. */}
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* Pass pageContext to the _document though the renderPage enhancer
              to render collected styles on server-side. */}
          <ManifestProvider manifest={manifest}>{children}</ManifestProvider>
        </ThemeProvider>
      </StylesProvider>
    );

    return (
      <Container>
        <Head>
          <title>{manifest.company.name}</title>
        </Head>
        {/* Wrap every page in relevant providers */}
        <Providers>
          <Page />
        </Providers>
      </Container>
    );
  }
}

export default MyApp;
