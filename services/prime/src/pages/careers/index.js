import React from 'react';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import Layout from '../../components/Layout';

const useStyles = makeStyles(() => {
  return {
    container: {

    },
  };
});

export function Careers() {
  const classes = useStyles();

  return (
    <>
      <Helmet title="Careers" />
      <Layout>
        <Grid
          className={classes.container}
          container
        >
          <Grid item xs={12}>
            <Typography variant='h3'>Careers page</Typography>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Careers;