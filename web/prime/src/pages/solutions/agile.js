import React, { useEffect, useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particles from 'react-particles-js';

import { makeStyles } from '@material-ui/styles';
import { Avatar, Card, CardContent, CardHeader, CircularProgress, Grid, Slide, Typography } from '@material-ui/core';

import agileParticles from '../../static/particles/agile';
import Banner from '../../components/Banner'
import InsightItem from '../../components/InsightItem'

// Related insights
// Solve the project management problem 

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    banner: {
      marginTop: spacing(8),
      marginLeft: spacing(3),
      marginRight: spacing(3),
    },
    card: {
      backgroundSize: '100% 100%',
      borderTop: `5px solid ${palette.secondary.main}`,
      cursor: 'pointer',
      height: 300,
    },
    cardAvatar: {
      backgroundColor: 'transparent',
      color: palette.primary.main,
      height: 'auto',
      paddingTop: spacing(3),
      width: '100%',
    },
    cardContainer: {
      background: 'linear-gradient(to bottom,rgba(0,0,0,.75),rgba(0,0,0,0))',
      height: '100%',
    },
    cardContent: {
      '& p': {
        fontSize: 14,
      },
      color: 'white',
      height: 130,
    },
    cardDescription: {
      fontWeight: 300,
    },
    cardIcon: {
      color: 'white',
    },
    cardSlide: {
      backgroundColor: 'rgba(0,0,0,.55)',
      height: '100%',
      paddingTop: '30%',
      position: 'relative',
      top: '-22%',
    },
    cardTitle: {
      color: 'white',
      zIndex: 1000,
    },
    insights: {
      backgroundColor: palette.grey[200],
      marginLeft: 'calc(1440px - 100vw)',
      marginRight: 'calc(1440px - 100vw)',
      marginTop: spacing(8),
      paddingBottom: spacing(3),
      paddingLeft: spacing(3),
      paddingRight: spacing(3),
      width: '100vw',
    },
    insightsTitle: {
      fontWeight: 700,
      paddingBottom: spacing(3),
      paddingTop: spacing(3),
    },
    re: {
      color: palette.primary.main,
      fontWeight: 300,
    },
    steps: {
      paddingLeft: spacing(7),
      paddingRight: spacing(7),
      width: '100%',
      [breakpoints.down('sm')]: {
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
      },
    },
    subheading: {
      fontWeight: 600,
      marginBottom: spacing(.5),
      marginTop: spacing(7),
    },
    subtitle: {
      fontWeight: 300,
      marginBottom: spacing(6),
    },
    topic: {
      display: 'static',
      fontWeight: 600,
      position: 'relative',
      top: -spacing(50),
      width: '100%',
      [breakpoints.down('sm')]: {
        fontSize: 64,
        top: -spacing(15),
      },
    },
  };
});

const steps = [
  {
    desc: 'Visualize and break down large, complex projects into manageable, bite-sized tasks',
    icon: ['fal', 'project-diagram'],
    image: require('../../static/images/space-1.jpg'),
    name: 'Plan',
  },
  {
    desc: 'Our consultants implement project workflows or execute ones already planned',
    icon: ['fal', 'running'],
    image: require('../../static/images/people-11.jpg'),
    name: 'Perform',
  },
  {
    desc: 'Both our technical pipeline and consultants can deliver optimal solutions efficiently',
    icon: ['fal', 'truck-loading'],
    image: require('../../static/images/plane-1.jpg'),
    name: 'Deliver',
  },
  {
    desc: 'Let us gauge how much your team can tackle for each cycle and gather feedback for the next',
    icon: ['fal', 'history'],
    image: require('../../static/images/telescope-3.jpg'),
    name: 'Review',
  },
];

const GET_INSIGHTS = gql`
  query {
    documents(first: 2, where: { type: INSIGHT }) {
      _id
      author {
        name {
          first
          last
          preferred
        }
        profile {
          avatar
        }
      }
      description
      media
      meta {
        featured
      }
      subtitle
      title
      type
    }
  }
`;

export function AgileStep({ item }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  const hoverContent = (
    <Slide direction='up' in={hover} timeout={500}>
      <div className={classes.cardSlide}>
        <Avatar className={classes.cardAvatar}>
          <FontAwesomeIcon
            className={classes.cardIcon}
            icon={item.icon}
            size='2x'
          />
        </Avatar>
        <CardContent className={classes.cardContent}>
          <Typography align='center' className={classes.cardDescription}>
            {item.desc}
          </Typography>
        </CardContent>
      </div>
    </Slide>
  );

  return (
    <Grid item md={3} xs={12}>
      <Card
        className={classes.card}
        elevation={0}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      >
        <div className={classes.cardContainer}>
          <CardHeader
            title={item.name}
            titleTypographyProps={{
              align: 'center',
              className: classes.cardTitle
            }}
          />
          {hover ? hoverContent : null}
        </div>
      </Card>
    </Grid>
  );
}

export function AgileSteps() {
  return steps.map((item) => <AgileStep item={item} key={item.name} />);
}

export function Agile() {
  const classes = useStyles();
  const [topic, setTopic] = useState(0);
  const topics = ['imagine', 'define', 'focus', 'optimize', 'accelerate', 'iterate'];

  useEffect(() => {
    const id = setInterval(() => {
      if (topic === topics.length - 1) {
        return setTopic(0);
      }
  
      return setTopic(topic + 1);
    }, 2000);

    return () => clearInterval(id);
  });

  return (
    <Grid
      alignItems='center'
      container
      justify='center'
    >
      <Grid item xs={12}>
        <div style={{ height: '100%' }}>
          <Particles params={agileParticles} />
          <Typography
            align='center'
            className={classes.topic}
            component='div'
            variant='h1'
          >
            <span className={classes.re}>(re)</span>
            {topics[topic]}
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Typography
          align='center'
          className={classes.subheading}
          variant='h4'
        >
          Project Management Solutions
        </Typography>
        <Typography
          align='center'
          className={classes.subtitle}
          variant='h6'
        >
          At its core, the Fusion Standard is about optimizing process
        </Typography>
      </Grid>

      <Grid
        className={classes.steps}
        container
        justify='space-between'
        spacing={4}
      >
        <AgileSteps />
      </Grid>

      <Banner
        button='Contact us'
        className={classes.banner}
        message='Learn more about our project management workflows'
        to='/contact'
      />
      
      <Grid className={classes.insights} container justify='center' spacing={2}>
        <Grid item xs={12} style={{ maxWidth: 1440 }}>
          <Grid container justify='center' spacing={2}>
            <Grid item xs={12}>
              <Typography
                align='center'
                className={classes.insightsTitle}
                variant='h4'
              >
                Insights
              </Typography>
            </Grid>

      
            <Query query={GET_INSIGHTS}>
              {({ loading, error, data }) => {
                if (error) return null;
                if (loading) return <CircularProgress />;

                return data.documents.map((doc) => (
                  <InsightItem insight={doc} key={doc.title} size={{ md: 6 }} />
                ));
              }}
              </Query>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Agile;