import React from 'react';

import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => {
  return {
    close: {
      color: 'inherit',
      position: 'absolute',
      right: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      }
    }
  };
});

export default function Banner() {
  const classes = useStyles();

  return (
    <IconButton className={classes.close} disableRipple id='close-button'>
      <CloseIcon />
    </IconButton>
  );
};

