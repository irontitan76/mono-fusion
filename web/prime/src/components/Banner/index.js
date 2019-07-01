import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    banner: {
      backgroundColor: palette.primary.main,
      border: `20px solid ${palette.primary.dark}`,
      color: 'white',
      marginTop: spacing(5),
      padding: spacing(3),
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      }
    },
    button: {
      float: 'right',
      [breakpoints.down('sm')]: {
        float: 'none'
      },
    },
  };
});

export function Banner({ action, className, message, button, to, ...rest }) {
  const classes = useStyles();

  return (
    <Grid className={clsx(classes.banner, className)} item xs={12} {...rest}>
      <Grid alignItems='center' container justify='space-between' spacing={2}>
        <Grid item md={9} xs={12}>
          <Typography variant='subtitle1'>
            {message}
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Link component={RRLink} to={to} underline='none'>
            <Button
              className={classes.button}
              color='default'
              onClick={action}
              variant='contained'
            >
              {button}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Banner;