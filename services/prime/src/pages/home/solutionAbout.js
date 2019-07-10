import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    button: {
      boxShadow: 'none',
    },
    category: {
      color: palette.grey[600],
      marginBottom: spacing(1),
      textTransform: 'uppercase',
    },
    description: {
      fontSize: 18,
      marginBottom: spacing(3),
    },
    imageContainer: {
      height: '30%',
      paddingTop: 24,
      width: '100%',
    },
    interact: {
      '& h4': {
        letterSpacing: 3,
      },
      padding: spacing(3, 4),
    },
    name: {
      fontSize: '1.8rem',
      fontWeight: 700,
    }
  };
});


export function SolutionAbout({ action, category, description, media, name }) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.interact}
      container
      spacing={6}
    >
      <Grid item xs={7}>
        <Typography
          className={classes.category}
          variant='subtitle1'
        >
          {category}
        </Typography>
        <Typography
          className={classes.name}
          gutterBottom
          variant='h5'
        >
          {'Fusion ' + name}
        </Typography>
        <Typography
          className={classes.description}
        >
          {description}
        </Typography>
        <Button
          className={classes.button}
          color='primary'
          component={Link}
          to={action.path}
          variant='contained'
        >
          {action.text}
        </Button>
      </Grid>
      <Grid className={classes.imageContainer} item xs={5}>
        <img alt={name} height="100%" src={media} width="100%" />
      </Grid>
    </Grid>
  );
};

export default SolutionAbout;