import React from 'react';

import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import { setCookie } from '@fusion/design/helpers';

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

export default function BannerClose({ name, onClose }) {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.close} 
      disableRipple 
      id='close-button'
      onClick={() => onClose(() => {
        setCookie(`user-has-accepted-${name}`, true);
        return true;
      })}
    >
      <CloseIcon />
    </IconButton>
  );
};

