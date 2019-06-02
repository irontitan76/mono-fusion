import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';

import SliderItemIcon from './SliderItemIcon';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    listItem: {
      '&:hover': {
        backgroundColor: `${isDark ? '#313131' : '#e2e2e2'} !important`,
      },
      borderRadius: 3,
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontWeight: 300,
      paddingBottom: spacing(.5),
      paddingTop: spacing(.5),
    },
    listItemSelected: {
      backgroundColor: `${isDark ? '#313131' : '#d2d2d2'} !important`,
      color: palette.primary.main,
      fontWeight: 500,
    },
    listItemTitle: {
      fontWeight: 'inherit',
    },
  };
});

export function SliderItem({ component, href, icon, label }) {
  const classes = useStyles();
  const Component = component;

  let item = (
    <ListItem
      classes={{ selected: classes.listItemSelected }}
      className={classes.listItem}
      key={label}
      selected={href && global.window && global.window.location.pathname === href}
    >
      <SliderItemIcon icon={icon} />
      <ListItemText
        primaryTypographyProps={{ className: classes.listItemTitle }}
      >
        {label}
      </ListItemText>
    </ListItem>
  );

  if (Component && href) {
    item = (
      <Component href={href} key={label + 'wrapper'}>
        {item}
      </Component>
    );
  }

  return item;
}

SliderItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  component: PropTypes.func,
  href: PropTypes.string,
};

export default SliderItem;