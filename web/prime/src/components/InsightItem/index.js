import React, { useState } from 'react';
import { Link as RRLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardHeader, CardMedia, Grid, Link, Typography } from '@material-ui/core';

import Author from './Author';

const useStyles = makeStyles(({ palette, shadows, spacing }) => {
  return {
    author: {
      bottom: 20,
      marginTop: spacing(2),
      position: 'absolute',
    },
    card: {
      '&:hover': {
        border: 'none',
        boxShadow: shadows[3],
        transform: 'translateY(-7px)',
        transition: 'transform .2s ease-in',
      },
      backgroundColor: palette.background.paper,
      cursor: 'pointer',
      position: 'relative',
      transition: 'transform 1s ease-out',
    },
    cardContent: {
      minHeight: 175,
      padding: 0,
    },
    description: {
      color: 'white',
      fontSize: 14,
      paddingTop: spacing(1),
    },
    item: {
      paddingTop: 7,
    },
    media: {
      height: 200,
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,.35)',
      height: 200,
      padding: spacing(2),
    },
    subheader: {
      fontSize: 14,
    },
    title: {
      fontSize: 22,
      fontWeight: 600,
    },
    type: {
      color: 'white',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: 3,
      position: 'absolute',
      top: 170,
    },
  };
});

export function InsightItem({ insight }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  const overlay = (
    <div className={classes.overlay}>
      <Typography className={classes.description}>
        {insight.description}
      </Typography>
      <Typography className={classes.type}>
        {insight.type.toUpperCase()}
      </Typography>
    </div>
  );

  return (
    <Grid className={classes.item} item md={3} sm={6} xs={12}>
      <Link component={RRLink} to={`/insights/${insight._id}`} underline='none'>
        <Card
          className={classes.card}
          elevation={0}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <CardMedia
            className={classes.media}
            image={insight.media}
          >
            {hover ? overlay : null}
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <CardHeader
              subheader={insight.subtitle}
              subheaderTypographyProps={{ className: classes.subheader }}
              title={insight.title}
              titleTypographyProps={{ className: classes.title }}
            />
            {hover ? <Author author={insight.author} className={classes.author} size='sm' /> : null}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default InsightItem;