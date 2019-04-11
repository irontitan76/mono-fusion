import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const get = (property) => props => props[property];
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
        true: 10,
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
    news: {
      marginLeft: spacing(10),
      marginRight: spacing(10),
      overflowX: 'hidden',
      overflowY: 'hidden',
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
  const { component, insights, size, spacing } = props;

  if (props.insights.length === 0) return null;

  let Component = component || 'a';

  const InsightMedia = ({ insight }) => {
    if (!insight.media) return null;
    return (
      <CardMedia
        className={classes.cardMedia}
        style={{ height: insight.media.height }}
        image={insight.media.source}
      />
    );
  }

  const Insight = ({ insight }) => {
    return (
      <Grid 
        className={classes.insight}
        item
        key={insight.title} 
        {...defaultSize} 
        {...size} 
        {...insight.meta ? insight.meta.size : {}}
      >
        <Component 
          href={insight.slug ? `/insight?id=${insight.slug}` : insight.path}
        >
          <Card className={classes.card} elevation={0}>
            <InsightMedia insight={insight}/>
            <CardContent className={classes.cardContent}>
              <Typography variant='h6'>
                {insight.title}
              </Typography>
              <Typography>
                {insight.desc}
              </Typography>
              <Typography variant='caption'>
                {moment(insight._publishedAt._seconds).format('MMMM DD, YYYY')}
              </Typography>
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
    <div className={classes.news}>
      <Grid container justify='center' spacing={spacing}>
        <Insights />    
      </Grid>
    </div>
  ); 
};

NewsSlider.defaultProps = {
  component: 'a',
  mediaHeight: 150,
  rounded: false,
  size: defaultSize,
  spacing: 8,
};

NewsSlider.propTypes = {
  insights: PropTypes.array.isRequired,
};