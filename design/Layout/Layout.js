import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { makeStyles } from '@material-ui/styles';

import Banner from '@fusion/design/Banner';
import Footer from '@fusion/design/Footer';
import TopBar, { TopBarMenu, TopBarTitle } from '@fusion/design/TopBar';

const useStyles = makeStyles(({ palette }) => {
  return { 
    header: {
      position: 'sticky',
      top: 0,
    },
    main: {
      background: palette.background.default,
      minHeight: '100vh',
    },
    menu: {
      '& a': {
        textDecoration: 'none',
      },
      '& p': {
        cursor: 'pointer',
        fontWeight: 300,
        '&:hover': {
          color: palette.primary.main,
        },
      }
    },
  }
});

export default function Layout({ bannerMessage, children, items }) {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <Banner color='primary' message={bannerMessage} />
        <TopBar
          center={<TopBarMenu component={Link} items={items} />}
          leading={<TopBarTitle />}
        />
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