import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import {
  ListItem,
  ListItemText,
  Tooltip
} from '@material-ui/core';

import Icon from './MenuIcon';
import { colors, colorVariants } from '../types';

const useStyles = makeStyles(({ spacing }) => {
  return {
    item: {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: spacing(1, 2),
    },
    text: {
      fontWeight: 300,
      whiteSpace: 'nowrap',
    }
  };
});

export function MenuItem(props) {
  const { icon, iconColor, iconVariant, label, path, withTooltip, ...rest } = props;
  const classes = useStyles(props);

  let renderedIcon = (
    <Icon
      color={iconColor}
      icon={icon}
      variant={iconVariant}
    />
  );

  if (withTooltip) {
    renderedIcon = (
      <Tooltip title={label}>
        <a>
          {renderedIcon}
        </a>
      </Tooltip>
    );
  }

  if (path.component && path.href) {
    renderedIcon = <path.component href={path.href}>
      {renderedIcon}
    </path.component>    
  }

  return (
    <ListItem
      button
      className={classes.item}
      selected={path && global.window && global.window.location.pathname === path.href}
      {...rest}
    >
      {renderedIcon}
      <ListItemText
        primaryTypographyProps={{
          className: classes.text,
        }}
      >
        {label}
      </ListItemText>
    </ListItem>
  );
}

MenuItem.defaultProps = {
  iconColor: 'default',
  iconVariant: 'light',
  label: null,
  path: {},
  withTooltip: true,
};

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  iconColor: colors,
  iconVariant: colorVariants,
  label: PropTypes.node,
  onClick: PropTypes.func,
  path: PropTypes.shape({
    component: PropTypes.func,
    href: PropTypes.string,
  }),
  withTooltip: PropTypes.bool,
}

export default MenuItem;
