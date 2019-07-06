import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    banner: {
      background: `linear-gradient(45deg, ${palette.primary.main} 70%, ${palette.primary.dark} 10%)`,
      color: 'white',
      left: '50%',
      marginLeft: '-50vw',
      marginTop: spacing(5),
      padding: spacing(5, 13),
      position: 'relative',
      width: '100vw',
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
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

  const LinkComponent = ({ children }) => to ? (
    <Link component={RRLink} to={to} underline='none'>
      {children}
    </Link>
  ) : children;

  return (
    <Grid
      alignItems='center'
      className={clsx(classes.banner, className)}
      container
      justify='space-between'
      spacing={2}
      {...rest}
    >
      <Grid item md={9} xs={12}>
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
  );
}

export default Banner;