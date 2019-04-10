import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ spacing }) => {
  return {
    card: {
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
    cardContent: {
      '& span': {
        fontWeight: 500,
      },
      '& h6': {
        fontSize: 15,
      },
      '& p': {
        fontSize: 14,
        marginBottom: spacing(2),
      },
      paddingLeft: 0,
      paddingRight: 0,
    },
    cardMedia: {
      borderRadius: 10,
      height: 150,
    },
    news: {
      marginLeft: spacing(10),
      marginRight: spacing(10),
      overflowX: 'hidden',
      overflowY: 'hidden',
    },
  };
});

export default function NewsSlider({ insights }) {
  const classes = useStyles();

  const Insight = ({ insight }) => {
    return (
      <Grid item key={insight.title} md={3} xs={12}>
        <Card className={classes.card} elevation={0}>
          <CardMedia
            className={classes.cardMedia}
            image={insight.media.source}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant='h6'>
              {insight.title}
            </Typography>
            <Typography>
              {insight.desc}
            </Typography>
            <Typography variant='caption'>
              {insight._publishedAt}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  const Insights = () => {
    return insights.map((insight) => {
      return <Insight insight={insight} key={insight.title} />
    })
  }

  return (
    <div className={classes.news}>
      <Grid container justify='center' spacing={5}>
        <Insights />    
      </Grid>
    </div>
  ); 
};

NewsSlider.propTypes = {
  insights: PropTypes.array.isRequired,
};