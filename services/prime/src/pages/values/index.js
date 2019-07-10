import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import FullWidth from '../../components/FullWidth';
import Layout from '../../components/Layout';
import bgImage from '../../static/images/people-3.jpg';

import Selector from './selector';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    container: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: '100% 100%',
      height: 500,
      padding: `0 ${spacing(3)}px`,
      [breakpoints.up('xl')]: {
        height: 700,
      },
    },
    text: {
      paddingLeft: spacing(3),
    },
  };
});

const values = [
  {
    icon: '',
    name: 'Innovators at heart',
  },
  {
    icon: '',
    name: 'Bias for righteous action',
  },
  {
    icon: '',
    name: 'Challenge respectfully',
  },
  {
    icon: '',
    name: 'Be compassionate',
  },
  {
    icon: '',
    name: 'Collaborate effectively',
  },
];

export function Values() {
  const classes = useStyles();

  return (
    <Layout>
      <FullWidth className={classes.container}>
        <Grid alignItems='center' container style={{ height: '100%' }}>
          <Grid item md={4} xs={12}>
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