import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import { trace, shade } from '../helpers';
import { borders, colors, colorVariants } from '../types';

const useStyles = makeStyles(({ palette }) => {
  return {
    appBar: {
      backgroundColor: ({ color, variant }) => shade(palette, color, variant),
      borderBottom: ({ border }) => trace(palette, 'top', 'top', border),
      zIndex: 1200,
    },
    toolbar: {

    },
  };
});

export function Topbar({ AppBarProps, children, color, dense, ToolbarProps }) {
  const classes = useStyles({ color });

  return (
    <AppBar
      className={classes.appBar}
      {...AppBarProps}
    >
      <Toolbar
        variant={dense}
        {...ToolbarProps}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
}

Topbar.defaultProps = {
  AppBarProps: {},
  border: 'default',
  color: 'default',
  variant: 'main',
  ToolbarProps: {
    variant: 'dense',
  }
};

Topbar.propTypes = {
  AppBarProps: PropTypes.shape({}),
  border: borders,
  colors: colors,
  variants: colorVariants,
  ToolbarProps: PropTypes.shape({}),
};

export default Topbar;