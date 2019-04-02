import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import Banner from '@fusion/design/Banner';
import Footer from '@fusion/design/Footer';
import TopBar, { TopBarTitle } from '@fusion/design/TopBar';

const useStyles = makeStyles(({ palette }) => {
  return { 
    main: {
      background: palette.background.default,
      minHeight: '100vh',
    },
  }
});

export default function Layout({ children, config }) {
  const classes = useStyles();

  return (
    <>
      <header style={{ position: 'sticky', top: 0, }}>
        <Banner />
        <TopBar leading={<TopBarTitle />} />
      </header>
      <main className={classes.main}>
        {children}
      </main>
      <Footer />
    </>
  ); 
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};