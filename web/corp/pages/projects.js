import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ palette }) => {
  return {
    projects: {
      backgroundColor: palette.primary.main,
    },
  };
});

export function Projects() {
  const classes = useStyles();

  return (
    <Grid className={classes.projects} container justify='center'>
      <Grid item>

      </Grid>
    </Grid>
  );
}

export default Projects;
