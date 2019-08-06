import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/styles';
import { Grid, Link } from '@material-ui/core';

import Banner from '../../components/Banner';
import { CarouselItem } from '../../components/Carousel';
import { cd } from '../../components/Countdown';
import Layout from '../../components/Layout';
import Ticker from '../../components/Ticker';

import Intro from './intro';
import Solutions from './solutions';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    banner: {
      padding: spacing(5, 5),
      [breakpoints.down('sm')]: {
        padding: spacing(5, 0),
      },
    },
    tile: {
      height: 640,
      marginBottom: spacing(7),
      width: '100%',
    },
    tiles: {
      marginTop: spacing(5),
      padding: spacing(0, 5),
      width: '100%',
      [breakpoints.down('sm')]: {
        padding: 0,
      },
    },
  };
});

const items = [
  {
    action: 'Learn more',
    description: 'Integrate our solutions into your existing workflow',
    media: {
      source: 'http://localhost:3003/api/media/building-2.jpg',
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
      source: 'http://localhost:3003/api/media/people-4.jpg',
      type: 'image',
    },
    path: '/insights/5cfcb95e02743900079c6389',
    title: 'OUR SERVICES',
    variant: 'dark',
  },
  {
    action: 'See our standard',
    description: 'Proven strategies that effectively grow your business',
    media: {
      source: 'http://localhost:3003/api/media/plant-1.jpg',
      type: 'image',
    },
    path: '/insights/5cfcb95802743900079c6388',
    title: 'OUR PROCESS',
    variant: 'dark',
  },
];

const news = [
  {
    title: 'Embark on the next frontier:',
    message: 'Start your business\'s digital transformation on March 1, 2020.'
  },
  {
    title: 'Countdown:',
    message: `We open for business in ${cd(new Date('March 1, 2020 00:00:00').getTime())}`,
  },
];

export function Home() {
  const classes = useStyles();

  return (
    <>
      <Helmet title="Home" />
      <Layout>
        <Intro />
        <Ticker items={news} />
        <Solutions />
        <Banner
          className={classes.banner}
          message='Learn more about how our consultants and solutions can optimize your business'
          button='Contact us'
          to='/locations'
        />
        <Grid
          alignItems='center'
          className={classes.tiles}
          container
          justify='center'
        >
          {items.map((item) => {
            return (
              <Grid
                className={classes.tile}
                item
                key={item.title}
                xs={12}
              >
                <Link component={RRLink} to={item.path} underline='none'>
                  <CarouselItem item={item} />
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Layout>
    </>
  );
}

export default Home;