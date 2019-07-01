import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import Banner from '../../components/Banner';
import Carousel from '../../components/Carousel';
import Layout from '../../components/Layout';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    banner: {
      marginBottom: spacing(5),
    },
    companySubtitle: {
      color: palette.grey[500],
      fontSize: 18,
      letterSpacing: 1.1,
      paddingLeft: 7,
    },
    companyTitle: {
      color: palette.grey[700],
      letterSpacing: 23,
    },
    intro: {
      height: 500,
      paddingTop: 170,
    },
    logo: {
      marginRight: 50,
    },
  };
});

const items = [
  {
    action: 'Learn more',
    description: 'Integrate our solutions into your existing workflow',
    media: {
      source: require('../../static/images/building-2.jpg'),
      type: 'image',
    },
    path: '/solutions',
    title: 'OUR SOLUTIONS',
    variant: 'dark',
  },
  {
    action: 'See how we work',
    description: 'Quicken development with our qualified consultants',
    media: {
      source: require('../../static/images/people-4.jpg'),
      type: 'image',
    },
    path: '/insight?id=5cfcb97202743900079c638c',
    title: 'OUR SERVICES',
    variant: 'dark',
  },
  {
    action: 'See our standard',
    description: 'Proven strategies that effectively grow your business',
    media: {
      source: require('../../static/images/plant-1.jpg?resize&size=300'),
      type: 'image',
    },
    path: '/insight?id=5cfcb95e02743900079c6389',
    title: 'OUR PROCESS',
    variant: 'dark',
  },
];

// const icons = [
//   { icon: ['fal', 'mind-share'], name: 'A.I.' },
//   { icon: ['fal', 'code'], name: 'Technoloy' },
//   { icon: ['fal', 'credit-card-blank'], name: 'Finance' },
//   { icon: ['fal', 'balance-scale'], name: 'Legal' },
//   { icon: ['fal', 'dna'], name: 'Healthcare' },
//   { icon: ['fal', 'truck-loading'], name: 'Transport' },
//   { icon: ['fal', 'solar-panel'], name: 'Energy' },
//   { icon: ['fal', 'space-shuttle'], name: 'Space' },
// ];

export function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container justify='center'>
        <Grid className={classes.intro} item xs={12}>
          <Grid alignItems='center' container justify='center'>
            <Grid className={classes.logo} item>
              <img
                alt='logo'
                src={require('../../static/images/fusion-logo.svg')}
                height={150}
                width={150}
              />
            </Grid>

            <Grid item>
              <Typography
                className={classes.companyTitle}
                component='div'
                variant='h1'
              >
                FUSION
              </Typography>
              <Typography className={classes.companySubtitle}>
                Optimizing business through intelligent design
              </Typography>
            </Grid>

          </Grid>

        </Grid>

        <Grid item xs={12}>
          <Typography
            align='center'
            component='h2'
            variant='h5'
          >
            Industry targets
          </Typography>
        </Grid>

        <Grid item xs={12} style={{ paddingBottom: 56, paddingTop: 56, }}>

        </Grid>

        <Banner
          className={classes.banner}
          message='Learn more about how our consultants and solutions can optimize your business'
          button='Contact us'
          to='/contact'
        />

        <Carousel items={items} />
      </Grid>
    </Layout>
  );
}

export default Home;