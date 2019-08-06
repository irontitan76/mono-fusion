import React from 'react';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { Layout } from '@fusion/visual';

const useStyles = makeStyles(() => {
  return {
    container: {},
  };
});

export function Career() {
  const classes = useStyles();

  return (
    <>
      <Helmet

      />
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
    </>
  );
}

export default Career;