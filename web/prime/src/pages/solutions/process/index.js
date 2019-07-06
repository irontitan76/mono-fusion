import React, { useEffect, useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Particles from 'react-particles-js';

import { makeStyles } from '@material-ui/styles';
import { Fade, Grid, Typography } from '@material-ui/core';

import { H4, H6 } from 'components/Heading';
import particles from 'static/particles/particles';
import Banner from 'components/Banner';
import InsightItem from 'components/InsightItem';
import Loading from 'components/Loading';
import SlideCard from 'components/SlideCard';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    banner: {
      marginTop: spacing(8),
      marginLeft: spacing(3),
      marginRight: spacing(3),
    },
    insights: {
      backgroundColor: palette.background.paper,
      left: '50%',
      marginLeft: '-50vw',
      marginTop: spacing(8),
      paddingBottom: spacing(3),
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
      position: 'relative',
      width: '100vw',
    },
    insightsInner: {
      margin: 'auto',
      maxWidth: 1440,
      width: '100%',
    },
    insightsTitle: {
      fontWeight: 700,
      paddingBottom: spacing(3),
      paddingTop: spacing(3),
    },
    particleCanvas: {
      height: 700,
      width: '100%',
    },
    particleContainer: {},
    particles: {
      height: 700,
      left: '50%',
      marginLeft: '-50vw',
      position: 'relative',
      width: '100vw',
    },
    re: {
      color: palette.primary.main,
      fontWeight: 300,
    },
    steps: {
      margin: 'auto',
      paddingLeft: spacing(7),
      paddingRight: spacing(7),
      width: '100%',
      [breakpoints.down('sm')]: {
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
      },
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
    image: require('static/images/plan-1.jpg'),
    name: 'Plan',
    subtitle: 'Workflows with Fusion Interact'
  },
  {
    desc: 'Our consultants implement project workflows or execute ones already planned',
    icon: ['fal', 'running'],
    image: require('static/images/runner-1.jpg'),
    name: 'Perform',
    subtitle: 'Scheduled tasks efficiently',
  },
  {
    desc: 'Both our technical pipeline and consultants can deliver optimal solutions efficiently',
    icon: ['fal', 'truck-loading'],
    image: require('static/images/plane-1.jpg'),
    name: 'Deliver',
    subtitle: 'Innovative solutions quickly',
  },
  {
    desc: 'Let us gauge how much your team can tackle for each cycle and gather feedback for the next',
    icon: ['fal', 'history'],
    image: require('static/images/telescope-3.jpg'),
    name: 'Review',
    subtitle: 'Progress for insights',
  },
];

const GET_INSIGHTS = gql`
  query {
    documents(first: 3, where: { type: INSIGHT }) {
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

export function ParticleHero({ topic }) {
  const classes = useStyles();

  return (
    <>
      <Particles
        params={particles}
        canvasClassname={classes.particleCanvas}
        className={classes.particles}
        height='700px'
        width='100vw'
      />
      <div>
        <Typography
          align='center'
          className={classes.topic}
          component='div'
          variant='h1'
        >
          <span className={classes.re}>(re)</span>
          {topic}
        </Typography>
      </div>
    </>
  );
}

export function ProcessSteps() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.steps}
      container
      justify='space-between'
      spacing={4}
    >
      {
        steps.map((item) => (
          <SlideCard item={item} key={item.name} />
        ))
      }
    </Grid>
  );
}

export function Process() {
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
    <Fade in timeout={700}>
      <div>
        <ParticleHero topic={topics[topic]} />
        <Grid
          alignItems='center'
          container
          justify='center'
          >
          <Grid item xs={12}>
            <H4>
              Project Management Solutions
            </H4>
            <H6>
              At its core, the Fusion Standard is about optimizing process
            </H6>
          </Grid>
        </Grid>
        <ProcessSteps />
        <Banner
          button='Contact us'
          className={classes.banner}
          message='Learn more about our project management workflows'
          to='/locations'
        />
        <Grid container justify='center'>
          <Grid item xs={12}>
            <H4>
              Let's solve the process problem
            </H4>
            {/* Solve the project management problem */}
          </Grid>
        </Grid>
        <div className={classes.insights}>
          <Grid
            alignItems='center'
            className={classes.insightsInner}
            container
            justify='center'
            spacing={2}
            style={{  }}
          >
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
                if (loading) return <Loading />;

                return data.documents.map((doc) => (
                  <InsightItem
                    bgColor='default'
                    insight={doc}
                    key={doc.title}
                    size={{ md: 4 }}
                  />
                ));
              }}
              </Query>
          </Grid>
        </div>
      </div>
    </Fade>
  )
}

export default Process;