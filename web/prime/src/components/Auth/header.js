import React from 'react';
import { Link as RRLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Grid, Link, Typography } from '@material-ui/core';

import logo from 'static/images/fusion-logo-white.png';

const useStyles = makeStyles(() => {
  return {
    title: {
      color: 'white',
      display: 'inline',
      fontWeight: 300,
      letterSpacing: 10,
      marginLeft: 24
    },
  };
});

export function LoginHeader() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Link component={RRLink} to='/' underline='none'>
        <Grid alignItems='center' container justify='center'>
          <img alt='logo' src={logo} />
          <Typography className={classes.title} variant='h3'>
            FUSION
          </Typography>
        </Grid>
      </Link>
    </Grid>
  );
}

export default LoginHeader;