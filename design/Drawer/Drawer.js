import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuIcon from '@material-ui/icons/Menu';

import DrawerListItems from './DrawerListItems';

const useStyles = makeStyles(({
    breakpoints,
    mixins,
    palette,
    spacing,
    transitions
  }) => {

  const isDark = palette.type === 'dark';
  const drawerTransition = transitions.create('width', {
    easing: transitions.easing.sharp,
    duration: transitions.duration.complex,
  });

  return {
    border: {
      borderLeft: `1px solid ${palette.grey[200]}`,
    },
    divider: {
      color: palette.divider,
    },
    drawer: {
      border: 'none',
      color: palette.getContrastText(palette.primary.main),
      flexShrink: 0,
      whiteSpace: 'nowrap',
      width: 240,
    },
    drawerOpen: {
      transition: drawerTransition,
      width: 240,
    },
    drawerClose: {
      overflowX: 'hidden',
      transition: drawerTransition,
      width: spacing(5) + 1,
      [breakpoints.up('sm')]: {
        width: spacing(7) + 1,
      },
    },
    expandButton: {
      '&:hover': {
        backgroundColor: 'white',
        border: `2px solid ${palette.primary.light}`,
        '& svg': {
          color: palette.primary.main,
        },
      },
      backgroundColor: 'white',
      border: `2px solid ${palette.grey[isDark ? 900 : 'A100']}`,
      boxSizing: 'border-box',
      padding: '3px',
      position: 'relative',
      left: '-12px',
      top: '50%',
      zIndex: 3
    },
    expandContainer: {
      width: 0,
    },
    expandIcon: {
      fontSize: '1rem',
      transition: 'all .3s',
    },
    expandIconOpen: {
      transform: 'rotate(-180deg)',
    },
    expandIconClose: {
      transform: 'none',
    },
    list: {
      height: 'calc(100% - 160px)',
      paddingTop: (() => props => props.underToolbar ? 0 : spacing(2))(), 
    },
    listItemSubheader: {
      color: palette.getContrastText(palette.primary.main),
      fontSize: 24,
      height: 48,
    },
    nav: {
      display: 'flex',
    },
    paper: {
      backgroundColor: palette.background.default,
      borderLeft: 'none',
      borderRight: 'none',
      color: palette.getContrastText(palette.background.paper),
      overflowY: 'hidden',
      zIndex: 1,
    },
    toolbar: mixins.toolbar,
  };
});

function NavigationDrawer(props) {
  const classes = useStyles(props);
  const {
    anchor,
    collapsedTitle,
    dense, 
    expandedTitle,
    items, 
    LinkComponent, 
    router, 
    underToolbar
  } = props;
  
  const [open, setOpen] = useState({
    drawer: false,
    menus: [],
    list: false,
  });

  const [hover, setHover] = useState(false);

  const isHorizontal = anchor === 'left' || anchor === 'right';
  const spacer = underToolbar ? <div className={classes.toolbar} /> : null;

  const onClick = () => setOpen({ ...open, drawer: !open.drawer });
  const onToggle = () => setOpen({ ...open, list: !open.list });
  const onMenu = (name) => {
    let menusOpen = [ ...open.menus ];
    const menuIndex = open.menus.indexOf(name);

    if (menuIndex > -1) {
      menusOpen.splice(menuIndex, 1);
    } else {
      menusOpen.push(name);
    }
    
    setOpen({ ...open, menus: menusOpen });
  };

  const DrawerListSubheader = () => {
    if (!collapsedTitle && !expandedTitle) return null;

    const button = (
      <Grid item style={{ marginBottom: 30 }}>
        <IconButton className={classes.listButton} onClick={onToggle}>
          <MenuIcon />
        </IconButton>
      </Grid>
    );

    return (
      <>
        <ListSubheader className={classes.listItemSubheader}>
          <Grid container justify='space-between'>
            <Grid item style={{ flexGrow: 1 }}>
              {(isHorizontal && !open.drawer) ? collapsedTitle : expandedTitle}
            </Grid>
            {!isHorizontal ? button : null}
          </Grid>
        </ListSubheader>
        <Divider className={classes.divider} />
      </>
    );
  };

  const openClass = {
    [classes.drawerOpen]: isHorizontal && open.drawer,
    [classes.drawerClose]: isHorizontal && !open.drawer,
  };

  return (
    <nav
      className={classes.nav}
      onMouseOver={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
      onDoubleClick={() => setOpen({ ...open, drawer: !open.drawer })}
    >
      <div>
        <Drawer 
          anchor={anchor}
          classes={{ paper: classNames(classes.paper, openClass)}}
          className={classNames(classes.drawer, openClass)}
          variant='permanent'>
          {spacer}
          <List className={classes.list}>
            <DrawerListSubheader />
            <DrawerListItems
              dense={dense}
              items={items}
              isHorizontal={isHorizontal}
              isListOpen={open.list}
              LinkComponent={LinkComponent}
              onMenu={onMenu}
              openMenus={open.menus}
              router={router}
            />
          </List>
        </Drawer>
      </div>
      <div className={classes.border} />
      <div className={classes.expandContainer} style={{ display: !hover ? 'none' : 'block' }}>
        <IconButton
          className={classes.expandButton}
          onClick={onClick}>
          <ChevronRightIcon
            className={classNames(classes.expandIcon, {
              [classes.expandIconOpen]: open.drawer,
              [classes.expandIconClose]: !open.drawer,
            })}
          />
        </IconButton>
      </div>
    </nav>
  );
}

NavigationDrawer.defaultProps = {
  anchor: 'left',
  collapsedTitle: null,
  dense: false,
  expandedTitle: null,
  underToolbar: false,
};

const itemShape = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
};

NavigationDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  collapsedTitle: PropTypes.node,
  dense: PropTypes.bool.isRequired,
  expandedTitle: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.arrayOf(PropTypes.shape(itemShape)),
      ...itemShape,
    })
  ).isRequired,
  underToolbar: PropTypes.bool.isRequired,
};

export default NavigationDrawer;