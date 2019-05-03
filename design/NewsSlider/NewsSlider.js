import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const get = (property) => props => props[property];
const getPercentage = (property) => props => `${100 / props[property]}%`;
const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    card: {
      '&:hover': {
        color: palette.primary.main,
        filter: 'grayscale(60%)',
      },
      backgroundColor: 'transparent',
      cursor: 'pointer',
      textDecoration: 'none',
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
      borderRadius: styledBy('rounded', {
        true: 7,
        false: 0,
      }),
      height: get('mediaHeight'),
    },
    insight: {
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    insightScroll: {
      minWidth: getPercentage('scroll'),
      maxWidth: getPercentage('scroll'),
    },
    news: {
      marginLeft: spacing(10),
      marginRight: spacing(10),
      overflowX: 'hidden',
      overflowY: 'hidden',
    },
    scroll: {
      overflowX: 'scroll',
    },
  };
});

const defaultSize = {
  xl: 2,
  md: 3,
  xs: 12,
};

export default function NewsSlider(props) {
  const classes = useStyles(props);
  const { component, insights, scroll, showDate, size, spacing } = props;

  if (props.insights.length === 0) return <div style={{ height: 200 }} />;

  let Component = component || 'a';
  let actualScroll = scroll;
  if (insights.length > actualScroll) actualScroll = false;

  const InsightMedia = ({ insight }) => {
    if (!insight.media) return null;
    return (
      <CardMedia
        className={classes.cardMedia}
        style={{ height: insight.media.height }}
        image={insight.media.source}  
      />
    );
  };

  const InsightDate = ({ date }) => {
    if (!showDate) return null;
    
    return (
      <Typography variant='caption'>
        {moment.unix(date).format('MMM DD, YYYY')}
      </Typography>
    )
  };

  const Insight = ({ insight }) => {
    
    return (
      <Grid 
        className={`${classes.insight} ${actualScroll ? classes.insightScroll : ''}`}
        item
        key={insight.title} 
        {...defaultSize} 
        {...size} 
        {...insight.meta ? insight.meta.size : {}}
      >
        <Component 
          href={insight.id ? `/insight?id=${insight.id}` : insight.path}
        >
          <Card className={classes.card} elevation={0}>
            <InsightMedia insight={insight}/>
            <CardContent className={classes.cardContent}>
              <Typography variant='h6'>
                {insight.title.toUpperCase()}
              </Typography>
              <Typography>
                {insight.desc}
              </Typography>
              <InsightDate date={insight._publishedAt._seconds} />
            </CardContent>
          </Card>
        </Component>
      </Grid>
    );
  };

  const Insights = () => {
    const items = insights.sort((x, y) => {
      const first = x.meta && x.meta.featured;
      const second = y.meta && y.meta.featured;
      return !!first === !!second ? 0 : !!first ? -1 : 1;
    });
    
    return items.map((insight) => {
      return <Insight insight={insight} key={insight.title} />
    });
  }

  return (
    <Fade in timeout={500}>
      <div className={classes.news}>
        <Grid
          className={actualScroll ? classes.scroll : ''}
          container 
          justify={actualScroll ? 'flex-start' : 'center'}
          spacing={spacing}
          wrap={actualScroll ? 'nowrap' : 'wrap'}
        >
          <Insights />    
        </Grid>
      </div>
    </Fade>
  ); 
};

NewsSlider.defaultProps = {
  component: 'a',
  mediaHeight: 150,
  showDate: true,
  rounded: false,
  scroll: false,
  size: defaultSize,
  spacing: 6,
};

NewsSlider.propTypes = {
  insights: PropTypes.array.isRequired,
};