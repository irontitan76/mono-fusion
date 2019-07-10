import React from 'react';
import { Link as RRLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    link: {
      color: palette.grey[500],
      cursor: 'pointer',
    },
    text: {
      fontSize: 10,
      marginTop: spacing(1),
    },
  };
});

export function LoginFooter({ action, alt, onSubmit }) {
  const classes = useStyles();

  return (
    <Grid item xs={9}>
      <Button
        fullWidth
        onClick={onSubmit}
        variant='outlined'
      >
        {action}
      </Button>
      <Typography className={classes.text}>
        {alt.message}&nbsp;
        <Link
          className={classes.link}
          component={RRLink}
          to={alt.path}
        >
          {alt.action}
        </Link>
        .
      </Typography>
    </Grid>
  );
}

export default LoginFooter;