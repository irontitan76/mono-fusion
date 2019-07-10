import React from 'react';
import Particles from 'react-particles-js';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import particles from '../../../static/particles/particles';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    particleCanvas: {
      height: 700,
      width: '100%',
    },
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
    topic: {
      display: 'static',
      fontWeight: 600,
      position: 'relative',
      top: -spacing(50),
      width: '100%',
      [breakpoints.down('sm')]: {
        fontSize: 64,
      },
    },
  };
});

export function ProcessIntro({ topic }) {
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

export default ProcessIntro;