import React, { Fragment, useState } from 'react';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/styles';
import Collapse from '@material-ui/core/Collapse';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DrawerListItems from './DrawerListItems';

const useStyles = makeStyles(({ breakpoints, palette, spacing, transitions }) => {
  const buttonTransition = transitions.create('transform', {
    easing: transitions.easing.sharp,
    duration: transitions.duration.shorter,
  });

  return {
    collapse: {
      backgroundColor: palette.grey[200],
      color: palette.getContrastText(palette.background.default),
    },
    collapseButton: {
      color: 'inherit',
      marginLeft: spacing(2),
      transform: 'none',
      transition: 'all .3s',
    },
    collapseButtonRotate: {
      transform: 'rotate(90deg)',
      transition: buttonTransition,
    },
    collapseMenu: {},
    listItem: {
      '&:focus': {
        backgroundColor: 'transparent',
      },
      '&:hover': {
        backgroundColor: palette.primary.default,
        color: palette.getContrastText(palette.background.default),
      },
      color: 'inherit',
      cursor: 'pointer',
    },
    listItemActive: {
      backgroundColor: palette.primary.main,
      color: palette.getContrastText(palette.primary.main),
      '&:focus': {
        backgroundColor: palette.primary.light,
        color: palette.getContrastText(palette.primary.main),
      },
      '&:hover': {
        backgroundColor: palette.primary.light,
        color: palette.getContrastText(palette.primary.main),
      },
    },
    listItemGutters: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      [breakpoints.down('md')]: {
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
      }
    },
    listItemIcon: {
      color: 'inherit',
      width: 24,
    },
    listItemText: {
      color: 'inherit',
      paddingLeft: 8,
      paddingRight: 0,
    },
    text: {
      color: 'inherit',
      fontWeight: 300,
    },
  };
});

export function DrawerListItem({ 
  dense,
  isHorizontal,
  item,
  LinkComponent,
  router 
}) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const CollapseIcon = () => {
    if ( !item.children || item.children.length === 0) return null;

    return <ChevronRightIcon className={
      classNames(
        classes.collapseButton, {
          [classes.collapseButtonRotate]: isOpen,
        }
      )
    } />;
  };

  const CollapseMenu = ({ children }) => {
    if ( !children || children.length === 0) return null;

    return (
      <Collapse
        className={classes.collapse}
        in={isOpen}
        timeout='auto'
        unmountOnExit
      >
        <List
          className={classes.collapseMenu}
          component='div'
          disablePadding
        >
          <DrawerListItems
            dense={dense}
            isHorizontal={isHorizontal}
            isListOpen={isOpen}
            items={children}
            LinkComponent={LinkComponent}
            router={router}
          />
        </List>
      </Collapse>
    );
  };

  const isActive = item.path && (item.path === router.pathname);

  const listItem = (
    <ListItem
      button
      classes={{ gutters: classes.listItemGutters }} 
      className={classNames({
        [classes.listItemActive]: isActive,
        [classes.listIem]: !isActive,
      })} 
      disabled={item.disabled}
      dense={dense}
      onClick={item.children ? () => setIsOpen(!isOpen) : null
      }
    >
      <ListItemIcon className={classes.listItemIcon}>
        {item.icon}
      </ListItemIcon>
      <ListItemText 
        className={classes.listItemText}
        primary={item.label} 
        primaryTypographyProps={{ className: classes.text }}
      />
      <CollapseIcon />
    </ListItem>
  );

  const linkedListItem = item.path ? (
    <LinkComponent href={item.path} passHref>
      {listItem}
    </LinkComponent>
  ) : listItem;

  return (
    <Fragment key={item.name}>
      {linkedListItem}
      <CollapseMenu children={item.children} isOpen={isOpen} />
    </Fragment>
  );
}

export default DrawerListItem;