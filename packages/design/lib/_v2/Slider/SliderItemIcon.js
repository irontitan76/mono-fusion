import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { ListItemIcon } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    icon: {
      color: 'inherit',
    }
  }
});

export function SliderItemIcon({ icon }) {
  if (!icon) return null;

  const classes = useStyles();

  return (
    <ListItemIcon className={classes.icon}>
      {icon}
    </ListItemIcon>
  );
}

export default SliderItemIcon;