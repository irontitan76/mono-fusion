import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import {
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';

import SSR from '../Ssr/Ssr';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';
  const selected = {
    borderLeft: `5px solid ${palette.grey[isDark ? 200 : 500]}`,
    color: palette.grey[isDark ? 200 : 700],
    cursor: 'pointer',
  };

  return {
    list: {
      padding: 0,
    },
    listItem: {
      '&:hover': selected,
      '&:first-child': {
        marginTop: spacing(2),
      },
      borderLeft: `5px solid ${palette.grey[isDark ? 500 : 200]}`,
      color: palette.grey[500],
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTop: 0,
    },
    listItemSelected: selected,
    listItemText: {
      marginBottom: 2,
      marginTop: 2,
    },
    listItemTextPrimary: {
      color: 'inherit',
      fontSize: 12,
      paddingLeft: spacing(1),
    },
    root: {
      boxSizing: 'border-box',
      marginLeft: spacing(1.5),
      paddingBottom: spacing(4),
      paddingLeft: spacing(2),
      paddingTop: spacing(2),
    },
    sticky: {
      height: 'calc(100vh - 100px)',
      paddingBottom: spacing(2),
      paddingLeft: spacing(2),
      paddingRight: 0,
      paddingTop: spacing(2),
      position: 'sticky',
      top: 80,
    },
  };
});

export function Contents({ items, sticky, title }) {
  const classes = useStyles();

  const list = items.map((item) => {
    const { label, path } = item;

    let result = (
      <ListItem
        button
        className={classes.listItem}
        key={label}
      >
        <ListItemText
          className={classes.listItemText}
          primaryTypographyProps={{
            className: classes.listItemTextPrimary,
          }}
        >
          {label}
        </ListItemText>
      </ListItem>
    );

    if (path && path.component && path.href) {
      const Component = path.component;
      result = (
        <Component
          href={path.href}
          key={label}
        >
          {result}
        </Component>
      );
    }

    return result;
  });

  return (
    <SSR>
      <div className={`${classes.root} ${sticky ? classes.sticky : ""}`}>
        <Typography>{title}</Typography>
          <List className={classes.list}>
            {list}
          </List>
      </div>
    </SSR>
  );
};

Contents.defaultProps = {
  sticky: true,
}

Contents.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.shape({}),
  })),
  sticky: PropTypes.bool,
};

export default Contents;