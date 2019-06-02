import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Button, Toolbar, Typography } from '@material-ui/core';

import { trace } from '../helpers';

const useStyles = makeStyles(({  palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    button: {
      '&:hover': {
        backgroundColor: palette.grey[isDark ? 900 : 400],
      },
      backgroundColor: palette.grey[isDark ? 800 : 300],
      display: 'flex',
      fontWeight: 400,
      justifyContent: 'flex-start',
      padding: spacing(1, 2),
      textTransform: 'none',
    },
    title: {
      fontWeight: 500,
    },
    toolbar: {
      backgroundColor: palette.background[isDark ? 'default' : 'paper'],
      borderBottom: ({ border }) => trace(palette, 'top', 'top', border),
      display: 'flex',
      height: 75,
      justifyContent: 'space-between',
      padding: (props) => spacing(props.spacing),
      position: 'sticky',
      top: 0,
      width: '100%',
    },
  };
});

export function TitleBar(props) {
  const classes = useStyles(props);
  const { buttonLabel, onClick, title } = props;

  const action = buttonLabel ? (
    <Button
        className={classes.button}
        color='default'
        onClick={onClick}
      >
        {buttonLabel}
      </Button>
  ) : null;

  return (
    <Toolbar className={classes.toolbar}>
      <Typography
        className={classes.title}
        component="h1"
        variant="h5"
      >
        {title}
      </Typography>
      {action}
    </Toolbar>
  )
};

TitleBar.defaultProps = {
  buttonLabel: '',
  onClick: () => null,
  spacing: 5,
};

TitleBar.propTypes = {
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func,
  spacing: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default TitleBar;