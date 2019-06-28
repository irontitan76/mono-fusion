import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Grid, Toolbar } from '@material-ui/core';

import Desktop from './Desktop';
import DesktopFooter from './DesktopFooter';
import LayoutTitle from './Title';
import Mobile from './Mobile';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    header: {
      backgroundColor: palette.primary.dark,
    },
    main: {
      margin: 'auto',
      maxWidth: 1440,
      minHeight: 'calc(100vh - 48px)',
      padding: `0 ${spacing(3)}px`,
      [breakpoints.down('xs')]: {
        padding: `0 ${spacing(2)}px`,
      }
    },
    toolbar: {
      alignSelf: 'center',
      maxWidth: 1440,
      width: '100%',
    }
  };
});

const MENU_ITEMS = [
  {
    name: 'Our Solutions',
    path: '/solutions',
  },
  {
    name: 'Our Insights',
    path: '/insights',
  }
];

export function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.header} color='primary'>
        <Toolbar className={classes.toolbar} variant='dense'>
          <Grid alignItems='center' container justify='space-between'>
            <LayoutTitle />
            <Desktop items={MENU_ITEMS} />
            <Mobile items={MENU_ITEMS} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar variant='dense' />
      <main className={classes.main}>
        {children}
      </main>
      <DesktopFooter />
    </>
  );
}

export default Layout;
