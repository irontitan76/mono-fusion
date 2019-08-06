import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { FullWidth, Layout } from '@fusion/visual';

import Selector from './selector';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    container: {
      backgroundImage: 'url(http://localhost:3003/api/media/people-3.jpg)',
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

export function Values() {
  const classes = useStyles();

  const values = [
    {
      content: '',
      icon: '',
      name: 'Innovators at heart',
      subheader: 'True innovators care not about fame, power, or glory, but humanity.'
    },
    {
      content: '',
      icon: '',
      name: 'Bias for righteous action',
      subheader: 'Spend time executing, encouraging, learning, and improving.',
    },
    {
      content: '',
      icon: '',
      name: 'Challenge respectfully',
      subheader: '',
    },
    {
      content: '',
      icon: '',
      name: 'Be compassionate',
      subheader: '',
    },
    {
      content: '',
      icon: '',
      name: 'Collaborate effectively',
      subheader: '',
    },
  ];

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