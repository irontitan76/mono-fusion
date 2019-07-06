import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    button: {
      borderRadius: 0,
    },
    title: {
      color: palette.secondary.light,
      fontWeight: 300,
      letterSpacing: 4,
      marginLeft: spacing(2),
    },
  };
});

function Navbar({ action, to }) {
  const classes = useStyles();

  return (
    <AppBar elevation={0}>
      <Toolbar component={Grid} justify='space-between' variant='dense'>
        <Typography
          className={classes.title}
        >
          INTERACT
        </Typography>
        <Button
          className={classes.button}
          component={Link}
          to={to}
        >
          {action}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Navbar.defaultProps = {
  action: 'Login',
  to: '/login',
};

export default Navbar;
