import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import DrawerListExpander from './DrawerListExpander';
import DrawerListItems from './DrawerListItems';
import DrawerListSubheader from './DrawerListSubheader';

const useStyles = makeStyles(
  ({ breakpoints, mixins, palette, spacing, transitions }) => {
    const drawerTransition = transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shortest,
    });

    return {
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
      list: {
        border: 'none',
        height: 'calc(100% - 160px)',
        paddingTop: (() => (props) => (props.underToolbar ? 0 : spacing(2)))(),
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
  }
);

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
    underToolbar,
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
    let menusOpen = [...open.menus];
    const menuIndex = open.menus.indexOf(name);

    if (menuIndex > -1) {
      menusOpen.splice(menuIndex, 1);
    } else {
      menusOpen.push(name);
    }

    setOpen({ ...open, menus: menusOpen });
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
          classes={{ paper: classNames(classes.paper, openClass) }}
          className={classNames(classes.drawer, openClass)}
          variant="permanent"
        >
          {spacer}
          <List className={classes.list}>
            <DrawerListSubheader
              collapsedTitle={collapsedTitle}
              expandedTitle={expandedTitle}
              isExpanded={open.drawer}
              isHorizontal={isHorizontal}
              onToggle={onToggle}
            />
            <DrawerListItems
              dense={dense}
              items={items}
              isHorizontal={isHorizontal}
              isListOpen={open.list}
              LinkComponent={LinkComponent}
              router={router}
            />
          </List>
        </Drawer>
      </div>
      <div className={classes.border} />
      <DrawerListExpander
        isExpanded={open.drawer}
        isHovering={hover}
        onClick={onClick}
      />
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
