import React, { useEffect } from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { manifest } from '@fusion/client/config/manifest';
import Intro from '@fusion/design/Intro';
import NewsSlider from '@fusion/design/NewsSlider';
import test from '@fusion/api/example';

const useStyles = makeStyles(({ spacing }) => {
  return {
    hero: {
      '&:hover': {
        filter: 'grayscale(40%)',
      },
      backgroundImage: 'url(/static/images/people-2.jpg)',
      backgroundSize: 'cover',
      cursor: 'pointer',
      height: 600,
      margin: spacing(10),
    },
    subheading: {
      paddingBottom: spacing(4),
    }
  }
});

export function Home() {
  const classes = useStyles();

  useEffect(() => {
    test().then((result) => {
      console.log(result.data);
    });

    return () => console.log('unmounted');
  });

  const insights = [
    {
      _publishedAt: 'April 10, 2019',
      desc: 'Learn more about the significance of our Insights Engine and delve into the latest trends in technology',
      media: {
        source: '/static/images/nyc-1.jpg',
        type: 'image',
      },
      path: '/insight?id=1',
      title: 'INSIGHTS ENGINE',
    },
    {
      _publishedAt: 'April 11, 2019',
      desc: 'Our Sales Team has vision for delivering optimal solutions and can provide you with the best technology and people possible.',
      media: {
        source: '/static/images/team-1.jpg',
        type: 'image',
      },
      path: '/insight?id=1',
      title: 'FUSION CONSULTING',
    },
    {
      _publishedAt: 'April 12, 2019',
      desc: 'Explore our showcase and see how our robust code library can quickly create web applications',
      media: {
        source: '/static/images/path2.jpg',
        type: 'image',
      },
      path: '/insight?id=3',
      title: 'FUSION DESIGN',
    },
  ];

  return (
    <>
      <Intro
        logo={manifest.company.logo}
        slogan={manifest.company.slogan}
        title={manifest.company.name}
      />

      <Typography 
        align='center'
        className={classes.subheading}
        variant='h5'
      >
        Company News
      </Typography>

      <NewsSlider
        component={Link}
        insights={insights}
        rounded={true}
        spacing={4}
      />

      <Grid container justify='center'>
        <Link href='/solutions?id=1'>
          <Grid className={classes.hero} component='a' item xs={12}>
            <Grid container justify='center'>
              <Grid item>
                Hello
              </Grid>
            </Grid>
          </Grid>
        </Link>
      </Grid>
     </>
  );
};

export default Home;