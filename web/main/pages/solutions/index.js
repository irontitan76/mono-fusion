import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import NewsSlider from '@fusion/design/lib/NewsSlider';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    focus: {
      paddingBottom: spacing(2),
      paddingLeft: spacing(10),
      paddingRight: spacing(10),
      paddingTop: spacing(2),
    },
    focusContent: {
      borderBottom: `1px solid ${palette.grey[300]}`,
      borderRight: `1px solid ${palette.grey[300]}`,
      borderTop: `1px solid ${palette.grey[300]}`,
      boxSizing: 'border-box',
      color: palette.common.white,
    },
    focusItem: {
      '&:hover': {
        backgroundColor: palette.primary.dark,
        color: palette.common.white,
      },
      '&:last-child': {
        borderBottom: `1px solid ${palette.grey[300]}`,
      },
      backgroundColor: palette.primary.main,
      borderLeft: `2px solid ${palette.grey[300]}`,
      borderRight: `2px solid ${palette.grey[300]}`,
      borderTop: `2px solid ${palette.grey[300]}`,
      color: 'white',
      height: '25%',
    },
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
    },
    heroContent: {
      height: '100%',
      padding: spacing(7),
    },
    heroTitle: {
      color: palette.common.white,
    },
    heroSubtitle: {
      color: palette.common.white,
    },
  };
});

function Solutions() {
  const classes = useStyles();

  const insights = [
    {
      _publishedAt: 39084902380948,
      desc: 'Explore our solutions for building your individual brand',
      media: {
        source: '/static/images/product-1.jpg',
        type: 'image',
      },
      path: '/solutions/individual',
      title: 'Individual',
    },
    {
      _publishedAt: 39084902380948,
      desc: 'Find out how we take your idea from conception to reality',
      media: {
        source: '/static/images/office-2.jpg',
        type: 'image',
      },
      path: '/solutions/startups',
      title: 'Startups',
    },

    {
      _publishedAt: 39084902380948,
      desc: 'Accelerate your growth by employing our proven strategies',
      media: {
        source: '/static/images/people-5.jpg',
        type: 'image',
      },
      path: '/solutions/smb',
      title: 'Small & Medium Business',
    },
    {
      _publishedAt: 39084902380948,
      desc: 'Optimize business process and quickly react to industry shifts',
      media: {
        source: '/static/images/people-6.jpg',
        type: 'image',
      },
      path: '/solutions/enterprise',
      title: 'Enterprise',
    },
  ];

  const focuses = [
    {
      name: 'Agile',
    },
    {
      name: 'Cloud',
    },
    {
      name: 'Cyber',
    },
    {
      name: 'Data',
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
          <Typography align="left" className={classes.heroTitle} variant="h1">
            Accelerate
          </Typography>
          <Typography
            align="left"
            className={classes.heroSubtitle}
            style={{ fontWeight: 400 }}
            variant="h4"
          >
            Development
          </Typography>
        </Grid>
      </Grid>
    </div>
  );

  const Focuses = () => (
    <Grid className={classes.focus} container justify="center">
      <Grid item xs={12}>
        <Typography style={{ marginBottom: 20 }} variant="h4">
          Our Focus
        </Typography>
      </Grid>
      <Grid item md={4} xs={12} style={{ height: 300 }}>
        <List style={{ padding: 0, height: '100%' }}>
          {focuses.map((focus) => {
            return (
              <ListItem button className={classes.focusItem} key={focus.name}>
                <Typography>{focus.name}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid className={classes.focusContent} item md={8} />
    </Grid>
  );

  return (
    <>
      <Hero />
      <NewsSlider component={Link} insights={insights} showDate={false} />
      <Focuses />
    </>
  );
}

export default Solutions;
