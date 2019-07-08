import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Link, Typography } from '@material-ui/core';

import logo from 'static/images/fusion-logo-white.svg';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    container: {
      height: '100vh',
      width: '100vw',
    },
    logo: {
      marginBottom: spacing(3),
      marginRight: spacing(5),
      textAlign: 'center',
    },
    subtitle: {
      color: palette.grey[700],
      textAlign: 'center',
    },
    title: {
      color: palette.secondary.dark,
      letterSpacing: spacing(3),
      marginBottom: spacing(3),
      marginRight: -spacing(3),
      textTransform: 'uppercase',
    },
  }
});

// TODO: Showcase Apollo/GQL integration

export function Home() {
  const classes = useStyles();

  return (
    <Grid
      alignItems='center'
      className={classes.container}
      container
      justify='center'
    >
      <Link
        component={'a'}
        href='https://fusion-dev-245904.appspot.com/'
        underline='none'
      >
        <Grid className={classes.logo} item>
          <img
            alt='logo'
            src={logo}
            height={150}
          />
        </Grid>
        <Grid item>
          <Typography
            className={classes.title}
            component='div'
            variant='h1'
          >
            FUSION
          </Typography>
          <Typography className={classes.subtitle}>
            Optimizing business through intelligent design
          </Typography>
        </Grid>
      </Link>
    </Grid>
  );
}

export default Home;