import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import Layout from '../../components/Layout';

const useStyles = makeStyles(() => {
  return {
    container: {},
  };
});

export function Career() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        className={classes.container}
        container
      >
        <Grid item xs={12}>
          <Typography variant='h1'>
            Career page
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Career;