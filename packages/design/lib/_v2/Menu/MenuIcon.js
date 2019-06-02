import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { ListItemIcon } from '@material-ui/core';

import { colorize } from '../helpers';
import { colors, colorVariants } from '../types';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    icon: {
      color: ({ color, variant }) => colorize(palette, color, variant),
      maxWidth: 56,
      minWidth: 56,
      paddingLeft: spacing(1),
    }
  };
});

export function MenuIcon({ color, icon, variant }) {
  const classes = useStyles({ color, variant });

  if (!icon) return null;

  return (
    <ListItemIcon className={classes.icon}>
      {icon}
    </ListItemIcon>
  );
}

MenuIcon.defaultProps = {
  color: 'default',
  variant: 'main'
};

MenuIcon.propTypes = {
  color: colors,
  icon: PropTypes.node.isRequired,
  variant: colorVariants,
};

export default MenuIcon;
