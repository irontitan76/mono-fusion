import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Drawer, IconButton, Toolbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    button: {
      '& button': {
        '&:hover': {
          backgroundColor: 'transparent',
          color: palette.primary.main,
        },
        marginRight: 10,
      },
    },
    children: {
      padding: spacing(2, 5),
    },
    content: {
      padding: "20px 0px",
      width: "35vw",
    },
    root: {
      width: 400,
    }
  };
});

export function Slideout({ children, icon, onClose, open, title }) {
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      className={classes.root}
      onClose={onClose}
      open={open}
      ModalProps={{
        // hideBackdrop: true,
      }}
    >
      <div className={classes.content}>
        <Toolbar>
          <div className={classes.button} onClick={onClose}>
            {icon}
          </div>
          <Typography
            component="h2"
            variant="h6"
          >
            {title}
          </Typography>
        </Toolbar>
        <div className={classes.children}>
          {children}
        </div>
      </div>
    </Drawer>
  )
};

Slideout.defaultProps = {
  icon: (
    <IconButton>
      <CloseIcon />
    </IconButton>
  ),
};

Slideout.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Slideout;