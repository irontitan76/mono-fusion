import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => {
  return {
    title: {
      cursor: 'pointer',
      paddingBottom: spacing(2),
      paddingTop: spacing(2),
    }
  };
});

export function Title({ icon, path: { component, href }, title }) {
  const classes = useStyles();
  let LinkComponent = component;

  let item = (
    <ListItem className={classes.title}>
      <Tooltip title="Home">
        <a><ListItemIcon>{icon}</ListItemIcon></a>
      </Tooltip>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
  
  if (!!component && !!href) {
    item = (
      <LinkComponent href={href}>
        {item}
      </LinkComponent>
    );
  }

  return item;
};

Title.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Title;