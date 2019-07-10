import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Hidden } from '@material-ui/core';

import { H4, H6 } from '../../components/Heading';
import Slider from '../../components/Slider';
import solution1Image from '../../static/images/meeting-1.jpg';
import solution2Image from '../../static/images/template-1.png';
import solution3Image from '../../static/images/quantum-1.png';
import solution4Image from '../../static/images/money-1.jpg';

import SolutionAbout from './solutionAbout';
import SolutionItem from './solutionItem';

const SLIDER_HEIGHT = 568;

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    about: {
      backgroundColor: palette.background.paper,
    },
    container: {
      marginBottom: spacing(7),
      width: '100%',
    },
    select: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      width: '100%',
    },
    transformation: {
      '& > div': {
        paddingRight: 16,
      },
      height: SLIDER_HEIGHT,
      width: '100%',
    },
  };
});

const solutions = [
  {
    action: {
      path: '/solutions/process',
      text: 'Sign up for the beta',
    },
    category: 'Project Management',
    description: `
      Enhance your development process by organizing your 
      product flows with roadmaps, tasks breakdown, 
      and workcycle management. 
    `,
    media: solution1Image,
    name: 'Interact',
  },
  {
    action: {
      path: '/insights/5cfcb95802743900079c6388',
      text: 'Read our standard',
    },
    category: 'Web',
    description: `
      Want a scalable modern stack to start or transform 
      your business? Fusion Template incorporates the Fusion 
      Standard into a solution to meet your needs.
    `,
    media: solution2Image,
    name: 'Template',
  },
  {
    action: {
      path: '/solutions/data',
      text: 'Sign up for the beta',
    },
    category: 'Data Management & Analytics',
    description: `
      Seamlessly manage your business data 
      with dynamic visualizations, editing capabilities,
      and entity creation, while viewing dynamic visualizations
      on usage.
    `,
    media: solution3Image,
    name: 'Quantum',
  },
  {
    action: {
      path: '/solutions/data',
      text: 'Sign up for the beta',
    },
    category: 'Finance',
    description: `
      From everyday consumers to businesses, Thrive enables
      you to track revenue flows and investment 
      opportuntiies, while helping you increase profits.
    `,
    media: solution4Image,
    name: 'Thrive',
  },
];

export function HomeSolutions() {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  const slides = solutions.map((solution, index) => {
    return (
      <Grid
        className={classes.select}
        item
        key={index}
        onClick={() => setSelected(index)}
      >
        <SolutionItem selected={selected === index} {...solution} />
      </Grid>
    )
  });

  return (
    <div className={classes.container}>
      <Grid
        container
        justify='center'
        spacing={3}
      >
        <Grid item xs={12}>
          <H4>Digital Transformation</H4>
          <H6>Accelerate the vision for your business</H6>
        </Grid>
      </Grid>
      <Grid className={classes.transformation} container>
        <Grid item sm={3} xs={12}>
          <Slider height={SLIDER_HEIGHT}>{slides}</Slider>
        </Grid>
        <Hidden smDown>
          <Grid className={classes.about} item xs={9}>
            <Grid container justify='center'>
              <Grid item xs={12}>
                <SolutionAbout {...solutions[selected]} />
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  )
}

export default HomeSolutions;

