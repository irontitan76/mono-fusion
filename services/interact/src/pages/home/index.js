import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';

import Navbar from '../../components/Navbar';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    button: {
      borderRadius: 0,
    },
    container: {
      backgroundColor: palette.primary.dark,
      height: '100vh',
    },
    paper: {
      padding: spacing(7, 3),
    },
    title: {
      color: palette.secondary.light,
      fontWeight: 300,
      letterSpacing: 4,
      marginLeft: spacing(2),
    },
  };
});

function Home() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid
        alignItems='center'
        className={classes.container}
        container
        justify='center'
      >
        <Grid item>
          Test
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
