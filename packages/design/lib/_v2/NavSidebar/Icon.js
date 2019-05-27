import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { ListItemIcon } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {

  };
});

export function Icon({ icon }) {
  const classes = useStyles();

  if (!icon) return null;

  return (
    <ListItemIcon>
      {icon}
    </ListItemIcon>
  );
}

export default Icon;
