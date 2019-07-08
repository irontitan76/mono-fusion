import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import Layout from 'components/Layout';

import CEO from './ceo';
import Leader from './leader';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    container: {
      backgroundImage: `url(${require('static/images/office-1.jpg')})`,
      backgroundPosition: 'center center',
      backgroundSize: '100% 120%',
      filter: 'brightness(75%)',
      height: 500,
      left: '50%',
      marginLeft: '-50vw',
      position: 'absolute',
      width: '100vw',
      zIndex: -1,
    },
    content: {
      paddingTop: spacing(20),
      width: '100%',
    },
    title: {
      color: 'white',
      fontWeight: 700,
      padding: spacing(7, 0),
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
  };
});

const leaders = [
  {
    image: '/images/profile-1.jpg',
    name: 'Ross Sheppard',
    title: 'Founder & CEO',
  },
  {
    unfilled: true,
    title: 'Chief Finance Officer',
  },
  {
    unfilled: true,
    title: 'Chief Legal Officer',
  },
  {
    unfilled: true,
    title: 'Chief Operations Officer',
  },
  {
    unfilled: true,
    title: 'Chief Marketing Officer',
  },
];

export function Leadership() {
  const classes = useStyles();

  const execs = leaders.map((leader, index) => {
    const key = leader.name || index;

    if (index === 0) {
      return <CEO key={key} leader={leader} />;
    }

    return <Leader key={key} leader={leader} />;
  });

  return (
    <Layout>
      <div className={classes.container} />
      <Grid container>
        <Grid className={classes.content} item xs={12}>
          <Typography className={classes.title} variant='h2'>
            Leadership
          </Typography>
        </Grid>
        {execs}
      </Grid>
    </Layout>
  );
}

export default Leadership;