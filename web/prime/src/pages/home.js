import React from 'react'

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import Layout from '../components/Layout';

const useStyles = makeStyles(({ spacing }) => {
  return {
    item: {
      backgroundColor: '#e2e2e2',
      height: 640,
      marginBottom: spacing(5),
      marginTop: spacing(5),
    },
  };
});

export function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container>
        <Grid className={classes.item} item xs={12}>
          <Typography>
            {/* Optimize your business with intelligent design */}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align='center'
            component='h2'
            variant='h5'
          >
            Company Insights
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Home;