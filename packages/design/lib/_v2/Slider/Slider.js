import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import {
  Hidden,
  List,
  Tooltip
} from '@material-ui/core';

import SliderItems from './SliderItems';
import SSR from '../Ssr/Ssr';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    button: {
      backgroundColor: palette.background.paper,
      border: `2px solid ${isDark ? '#212121' : '#dedede'}`,
      borderRadius: spacing(1.5),
      color: palette.primary.main,
      cursor: 'pointer',
      height: 22,
      left: 76,
      outline: 'none',
      position: 'fixed',
      top: 28,
      transition: 'all .3s ease',
      width: 22,
      '&:hover': {
        backgroundColor: palette.primary.main,
        borderColor: palette.primary.main,
        color: palette.getContrastText(palette.primary.main),
      },
    },
    buttonOpen: {
      left: 292,
      transition: 'all .3s ease',
    },
    icon: {
      height: spacing(1.5),
      left: -3,
      position: 'relative',
      top: 1,
      verticalAlign: 0,
    },
    margin: {
      marginLeft: 64,
    },
    root: {
      backgroundColor: palette.grey[isDark ? 800 : 200],
      borderRight: `2px solid ${isDark ? '#212121' : '#dedede'}`,
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 64,
      minHeight: '100vh',
      position: 'fixed',
      transition: 'all .3s ease',
      width: 24,
      zIndex: 1299,
    },
    rootCopy: {
      display: 'flex',
      marginLeft: 64,
      transition: 'all .3s ease',
      width: 24,
    },
    rootOpen: {
      width: 240,
    },
    list: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      marginTop: spacing(1.5), 
      marginLeft: spacing(2),
      marginRight: spacing(2),
    },
    listHidden: {
      display: 'none',
    },
  };
});

export function Slider({ items, openState }) {
  const classes = useStyles();

  let open = openState[0];
  let setOpen = openState[1];
  
  return (
    <Hidden xsDown implementation="css">
      <div className={classes.margin} />
      
      <SSR>
        {
          items.length <= 1
          ? null
          : <>
              <div className={clsx(classes.rootCopy, { [classes.rootOpen]: open })} />
              <div
                className={clsx(classes.root, { [classes.rootOpen]: open })}
                onDoubleClick={() => setOpen(!open)}
              >
                <List className={clsx(classes.list, { [classes.listHidden]: !open })}>
                  <SliderItems items={items} />
                </List>
                <Tooltip title={open ? "Close Menu" : "Open Menu"}>
                  <button
                    className={clsx(classes.button, { [classes.buttonOpen]: open })}
                    onClick={() => setOpen(!open)}
                    type="button"
                  >
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={["fal", "bars"]}
                    />
                  </button>
                </Tooltip>
              </div>
            </>
        }
      </SSR>
    </Hidden>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.shape({
      component: PropTypes.func,
      href: PropTypes.string,
    }),
  })),
  openState: PropTypes.arrayOf(function(propValue, _, componentName) {
    if (propValue.length !== 2) {
      return new Error(`${componentName}'s prop openState does not contain only two values.`);
    }

    if (typeof propValue[0] !== 'boolean') {
      return new Error(`${componentName}'s prop openState[0] is not a boolean.`);
    }

    if (typeof propValue[1] !== 'function') {
      return new Error(`${componentName}'s prop openState[1] is not a function.`);
    }
  }),
};

export default Slider;