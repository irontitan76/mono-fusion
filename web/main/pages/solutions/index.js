import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/styles';
import { Grid, List, ListItem, Typography } from '@material-ui/core';
import NewsSlider from '@fusion/design/lib/NewsSlider';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    hero: {
      backgroundImage: 'url("/static/images/path-1.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
      backgroundSize: '100% 130%',
      boxSizing: 'border-box',
      height: 500,
      marginBottom: spacing(5),
      marginLeft: spacing(10),
      marginRight: spacing(10),
      marginTop: spacing(5),
      [breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
      },
    },
    heroContent: {
      height: '100%',
      padding: spacing(7),
    },
    heroTitle: {
      color: palette.common.white,
      fontSize: '5rem',
      [breakpoints.down('xs')]: {
        fontSize: '3rem',
      },
    },
    heroSubtitle: {
      color: palette.common.white,
      fontSize: '3rem',
      fontWeight: 400,
      [breakpoints.down('xs')]: {
        fontSize: '2rem',
      },
    },
  };
});

function Solutions() {
  const classes = useStyles();

  const insights = [
    {
      _publishedAt: 39084902380948,
      desc: 'Explore our solutions for building your individual brand',
      media: '/static/images/product-1.jpg',
      path: '/solutions/individual',
      title: 'Experience',
    },
    {
      _publishedAt: 39084902380948,
      desc: 'Find out how we take your idea from conception to reality',
      media: '/static/images/office-2.jpg',
      path: '/solutions/startups',
      title: 'Process',
    },

    {
      _publishedAt: 39084902380948,
      desc: 'Accelerate your growth by employing our proven strategies',
      media: '/static/images/people-5.jpg',
      path: '/solutions/smb',
      title: 'Mobile',
    },
    {
      _publishedAt: 39084902380948,
      desc: 'Optimize business process and quickly react to industry shifts',
      media: '/static/images/people-6.jpg',
      path: '/solutions/enterprise',
      title: 'Web',
    },
  ];

  const Hero = () => (
    <div className={classes.hero}>
      <Grid
        alignItems="center"
        className={classes.heroContent}
        container
        justify="flex-start"
      >
        <Grid item xs={4}>
          <Typography
            align="left"
            className={classes.heroTitle}
            variant="h1"
          >
            Accelerate
          </Typography>
          <Typography
            align="left"
            className={classes.heroSubtitle}
            variant="h4"
          >
            Development
          </Typography>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <>
      <Hero />
      <NewsSlider
        component={Link}
        insights={insights}
        showDate={false}
      />
    </>
  );
}

export default Solutions;
