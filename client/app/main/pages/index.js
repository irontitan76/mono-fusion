import React, { useEffect } from 'react';

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
      path: '/insights/1',
      title: 'INSIGHTS ENGINE',
    },
    {
      _publishedAt: 'April 11, 2019',
      desc: 'Explore our showcase and see how our robust code library can quickly create web applications',
      media: {
        source: '/static/images/team-1.jpg',
        type: 'image',
      },
      path: '/insights/1',
      title: 'FUSION DESIGN',
    },
  ];

  return (
    <>
      <Intro
        logo={manifest.company.logo}
        // primaryButton={{ label: 'Our solutions', path: '/solutions' }}
        // secondaryButton={{ label: 'Our services', path: '/services' }}
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

      <NewsSlider insights={insights} />

      <Grid container justify='center'>
        <Grid className={classes.hero} item xs={12}>
          <Grid container justify='center'>
            <Grid item>
              Hello
            </Grid>
          </Grid>
        </Grid>
      </Grid>
     </>
  );
};

export default Home;