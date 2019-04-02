import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => {
  return {
    text: {
      color: 'inherit',
      fontSize: 12,
      fontWeight: 300,
      height: '100%',
      lineHeight: 2.75,
      textAlign: 'center',
    }
  };
});

export default function Banner() {
  const classes = useStyles();

  return (
    <Typography className={classes.text} component='div'>
      This is an announcement
    </Typography>
  );
};

