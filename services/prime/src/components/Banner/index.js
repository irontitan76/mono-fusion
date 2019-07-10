import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Link, Typography } from '@material-ui/core';

import FullWidth from '../FullWidth';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    banner: {
      color: 'white',
      justifyContent: 'space-between',
      padding: spacing(5,0),
      [breakpoints.down('sm')]: {
        justifyContent: 'center',
        padding: spacing(5, 1),
        textAlign: 'center',
      },
      [breakpoints.up('xl')]: {
        padding: spacing(7,0),
      },
    },
    container: {
      background: `linear-gradient(45deg, ${palette.primary.main} 70%, ${palette.primary.dark} 10%)`,
    },
    button: {
      float: 'right',
      [breakpoints.down('sm')]: {
        float: 'none'
      },
    },
    item: {
      maxWidth: 1440,
    },
  };
});

export function Banner({ action, className, message, button, to, ...rest }) {
  const classes = useStyles();

  const LinkComponent = ({ children }) => to ? (
    <Link component={RRLink} to={to} underline='none'>
      {children}
    </Link>
  ) : children;

  return (
    <FullWidth className={classes.container}>
      <Grid
        alignItems='center'
        className={clsx(classes.banner, className)}
        container
        {...rest}
      >
        <Grid className={classes.item} item md={9} xs={12}>
          <Typography variant='subtitle1'>
            {message}
          </Typography>
        </Grid>
        <Grid item md={2} xs={6}>
          <LinkComponent>
            <Button
              className={classes.button}
              color='default'
              fullWidth
              onClick={action}
              variant='contained'
            >
              {button}
            </Button>
          </LinkComponent>
        </Grid>
      </Grid>
    </FullWidth>
  );
}

export default Banner;