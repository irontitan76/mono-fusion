import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { colorize } from '../helpers';
import { colors, colorVariants } from '../types';

const useStyles = makeStyles(({ palette }) => {
  return {
    title: {
      color: ({ color, variant }) => colorize(palette, color, variant),
    },
  };
});

export function TopbarTitle({ children, color, variant, ...rest }) {
  const classes = useStyles({ color, variant });

  return <Typography className={classes.title} {...rest}>{children}</Typography>;
}

TopbarTitle.defaultProps = {
  color: 'primary',
  variant: 'main',
};

TopbarTitle.propTypes = {
  color: colors,
  variants: colorVariants,
};

export default TopbarTitle;