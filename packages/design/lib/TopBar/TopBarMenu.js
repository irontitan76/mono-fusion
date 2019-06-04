import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ breakpoints, palette }) => {
  const isDark = palette.type === 'dark';
  return {
    menu: {
      '& a': {
        textDecoration: 'none',
      },
      '& p': {
        color: palette.grey[isDark ? 200 : 500],
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 300,
        '&:hover': {
          color: palette.grey[isDark ? 500 : 900],
        },
      },
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  };
});

const MenuItems = ({ component, items }) => {
  const LinkComponent = component || 'a';

  return items.map((item) => {
    return (
      <Grid item key={item.label}>
        <LinkComponent href={item.path}>
          <Typography>{item.label}</Typography>
        </LinkComponent>
      </Grid>
    );
  });
};

function TopBarMenu({ component, items }) {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      className={classes.menu}
      container
      justify="center"
      spacing={6}
    >
      <MenuItems component={component} items={items} />
    </Grid>
  );
}

export default TopBarMenu;
