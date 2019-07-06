import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => {
  return {
    h4: {
      color: 'inherit',
      fontWeight: 600,
      marginBottom: spacing(.5),
      marginTop: spacing(7),
    },
    h6: {
      color: 'inherit',
      fontWeight: 300,
      marginBottom: spacing(6),
    },
  };
});

export const H4 = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography
      align='center'
      className={classes.h4}
      variant='h4'
    >
      {children}
    </Typography>
  );
};

export const H6 = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography
      align='center'
      className={classes.h6}
      variant='h6'
    >
      {children}
    </Typography>
  );
};