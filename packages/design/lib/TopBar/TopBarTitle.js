import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

import TopBarLink from './TopBarLink';
import TopBarLogo from './TopBarLogo';
import TopBarName from './TopBarName';
import TopBarVersion from './TopBarVersion';

const useStyles = makeStyles(({ breakpoints, mixins, spacing }) => {
  const drawerWidth = 240;

  return {
    drawer: {
      flexShrink: 0,
    },
    drawerHeader: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...mixins.toolbar,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    innerContainer: {
      alignItems: 'baseline',
      display: 'flex',
    },
    menu: {
      [breakpoints.up('md')]: {
        display: 'none',
      },
    },
    outerContainer: {
      alignItems: 'center',
      display: 'flex',
    },
  };
});

export default function TopBarTitle({ LinkComponent }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.menu}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={() => setOpen(true)}
          edge="start"
          // className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          className={classes.drawer}
          open={open}
          variant="persistent"
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => setOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
        </Drawer>
      </div>
      <TopBarLink LinkComponent={LinkComponent}>
        <div className={classes.outerContainer}>
          <TopBarLogo />
          <div className={classes.innerContainer}>
            <TopBarName />
            <TopBarVersion />
          </div>
        </div>
      </TopBarLink>
    </>
  );
}
