import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { H4, H6 } from '../../../components/Heading';
import SlideCard from '../../../components/SlideCard';
import step1Image from '../../../static/images/plan-1.jpg';
import step2Image from '../../../static/images/runner-1.jpg';
import step3Image from '../../../static/images/plane-1.jpg';
import step4Image from '../../../static/images/telescope-3.jpg';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    steps: {
      margin: 'auto',
      marginBottom: spacing(7),
      paddingLeft: spacing(7),
      paddingRight: spacing(7),
      width: '100%',
      [breakpoints.down('sm')]: {
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
      },
    },
  };
});

const STEPS = [
  {
    desc: 'Visualize and break down large, complex projects into manageable, bite-sized tasks',
    icon: ['fal', 'project-diagram'],
    image: step1Image,
    name: 'Plan',
    subtitle: 'Workflows with Fusion Interact'
  },
  {
    desc: 'Our consultants implement project workflows or execute ones already planned',
    icon: ['fal', 'running'],
    image: step2Image,
    name: 'Perform',
    subtitle: 'Scheduled tasks efficiently',
  },
  {
    desc: 'Both our technical pipeline and consultants can deliver optimal solutions efficiently',
    icon: ['fal', 'truck-loading'],
    image: step3Image,
    name: 'Deliver',
    subtitle: 'Innovative solutions quickly',
  },
  {
    desc: 'Let us gauge how much your team can tackle for each cycle and gather feedback for the next',
    icon: ['fal', 'history'],
    image: step4Image,
    name: 'Review',
    subtitle: 'Progress for insights',
  },
];

export function StepsCards({ steps }) {
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

export function ProcessSteps() {
  const classes = useStyles();

  return (
    <>
      <Grid
        alignItems='center'
        container
        justify='center'
        >
        <Grid item xs={12}>
          <H4>Project Management Solutions</H4>
          <H6>At its core, the Fusion Standard is about optimizing process</H6>
        </Grid>
      </Grid>
      <StepsCards steps={STEPS} />
    </>
  );
}

export default ProcessSteps;