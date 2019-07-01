import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    container1: {
      height: 650,
    },
  }
});

const topics = ['deploy', 'integrate', 'hello', 'world', 'other', 'terms', 'ugh'];

export function Cloud() {
  const classes = useStyles();
  const [topic, setTopic] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (topic === topics.length - 1) {
        return setTopic(0);
      }
  
      return setTopic(topic + 1);
    }, 500);

    return () => clearInterval(id);
  });

  return (
    <Grid
      alignItems='center'
      className={classes.container1}
      container
      justify='center'
    >
      <Grid item xs={12}>
        <Typography
          align='center'
          component='div'
          variant='h1'
        >
          {topics[topic]}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Cloud;