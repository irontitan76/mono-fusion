import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {};
});

export function Schedule() {
  const classes = useStyles();

  return (
    <Typography
      component="h1"
      style={{ fontWeight: 500, padding: "25px 40px" }}
      variant="h5"
    >
      Schedule
    </Typography>
  );
}

export default Schedule;

