import React from 'react';
import { Link as RRLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Grid, Link } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => {
  return {
    menuItem: {
      '&:hover': {
        color: '#dedede',
      },
      textAlign: 'center',
    },
    menuItemText: {
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 14,
      fontWeight: 300,
    },
  };
});

export function DesktopMenu({ items }) {
  const classes = useStyles();

  const menuItems = items.map((item) => {
    return (
      <Grid
        className={classes.menuItem}
        item
        key={item.name}
        md={4}
      >
        <Link
          align='center'
          className={classes.menuItemText}
          component={RRLink}
          to={item.path}
          underline='none'
        >
          {item.name}
        </Link>
      </Grid>
    );
  });

  return (
    <Grid item md={6}>
      <Grid container justify='center'>
        {menuItems}
      </Grid>
    </Grid>
  );
}

export default DesktopMenu;