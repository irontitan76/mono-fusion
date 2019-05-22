import React from 'react';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(({ palette }) => {
  const isDark = palette.type === 'dark';

  return {
    border: {
      borderLeft: `1px solid ${palette.grey[isDark ? 900 : 'A100']}`,
    },
    expandButton: {
      '&:hover': {
        backgroundColor: palette.primary.light,
        '& svg': {
          color: palette.common.white,
        },
      },
      backgroundColor: palette.background.paper,
      border: `2px solid ${palette.grey[isDark ? 900 : 'A100']}`,
      boxSizing: 'border-box',
      padding: '3px',
      position: 'relative',
      left: '-12px',
      top: '50%',
      zIndex: 3,
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
  };
});

export function DrawerListSubheader({ isExpanded, isHovering, onClick }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.border} />
      <div
        className={classes.expandContainer}
        style={{ display: !isHovering ? 'none' : 'block' }}
      >
        <IconButton className={classes.expandButton} onClick={onClick}>
          <ChevronRightIcon
            className={classNames(classes.expandIcon, {
              [classes.expandIconOpen]: isExpanded,
              [classes.expandIconClose]: !isExpanded,
            })}
          />
        </IconButton>
      </div>
    </>
  );
}

export default DrawerListSubheader;
