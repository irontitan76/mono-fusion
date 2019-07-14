import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    title: {},
  };
});

export function Web() {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Typography
        align='center'
        className={classes.title}
        variant='h3'
      >
        Web
      </Typography>
    </Grid>
  );
}

export default Web;