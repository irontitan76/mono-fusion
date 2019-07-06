import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import FullWidth from 'components/FullWidth';
import Layout from 'components/Layout';

import Selector from './selector';

const useStyles = makeStyles(({ spacing }) => {
  return {
    container: {
      backgroundImage: `url(${require('static/images/people-3.jpg')})`,
      backgroundSize: '100% 100%',
      height: 500,
      padding: `0 ${spacing(3)}px`,
    },
    text: {
      paddingLeft: spacing(3),
    },
  };
});

const values = [
  {
    name: 'Innovators at heart',
  },
  {
    name: 'Bias for righteous action',
  },
  {
    name: 'Challenge respectfully',
  },
  {
    name: 'Be compassionate',
  },
  {
    name: 'Collaborate effectively',
  },
];

export function Values() {
  const classes = useStyles();

  return (
    <Layout>
      <FullWidth className={classes.container}>
        <Grid alignItems='center' container style={{ height: '100%' }}>
          <Grid item xs={4}>
            <Typography className={classes.text} variant='h3'>
              Values reflect what is important to the way you 
              live and work.
            </Typography>
          </Grid>
        </Grid>
      </FullWidth>
      <Selector items={values} />
    </Layout>
  );
}

export default Values;