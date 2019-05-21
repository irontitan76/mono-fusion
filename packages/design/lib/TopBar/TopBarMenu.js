import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette }) => {
  return {
    menu: {
      '& a': {
        textDecoration: 'none',
      },
      '& p': {
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 400,
        '&:hover': {
          color: palette.primary.main,
        },
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
