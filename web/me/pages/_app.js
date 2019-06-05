import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import ManifestProvider from '@fusion/design/lib/Provider/Manifest';
import { getTheme } from '@fusion/design/lib/theme';

import Layout from '../layouts/primary';
import manifest from '../manifest';
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
    const { Component, pageProps } = this.props;

    const updatedTheme = getTheme(tint);

    // I could put this in manifest with different default functions
    const setTint = () => {
      history.pushState("", document.title, `${window.location.pathname} ${window.location.search}`);
      this.setState({
        tint: tint === 'dark' ? 'light' : 'dark',
      });
    };

    manifest.navigation.primary.forEach((item) => {
      if (item.intent === 'changeTheme') {
        item.onClick = setTint;
      }
    });

    const Page = () => (
      <Component {...pageProps} />
    );

    const Providers = ({ children }) => (
      <ManifestProvider manifest={manifest}>
        <ThemeProvider theme={updatedTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
      </ManifestProvider>
    );

    return (
      <Container>
        <Head>
          <title>{manifest.company.name}</title>
        </Head>
        {/* Wrap every page in relevant providers */}
        <Providers>
          <Layout>
            <Page />
          </Layout>
        </Providers>
      </Container>
    );
  }
}

export default MyApp;
