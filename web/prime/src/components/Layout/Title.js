import React from 'react';
import { Link as RRLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Grid, Link, Typography } from '@material-ui/core';

import LogoWhite from '../../static/images/fusion-logo-white.png';

const useStyles = makeStyles(({ spacing }) => {
  return {
    beta: {
      display: 'inline',
      fontSize: 8,
      letterSpacing: '0',
    },
    link: {
      color: 'inherit',
    },
    logo: {
      height: 27,
      marginRight: spacing(2),
    },
    title: {
      cursor: 'pointer',
      display: 'inline',
      letterSpacing: 3,
      lineHeight: 3,
    },
  };
});

export function LayoutTitle() {
  const classes = useStyles();

  return (
    <Grid item md={3}>
      <Link className={classes.link} component={RRLink} to='/' underline='none'>
        <Grid
          alignItems='center'
          container
          justify='flex-start'
        >
            <img alt='Fusion Logo' className={classes.logo} src={LogoWhite} />
            <Typography
              className={classes.title}
              component='div'
            >
              FUSION
              <Typography
                className={classes.beta}
              >
                beta
              </Typography>
            </Typography>
        </Grid>
      </Link>
    </Grid>
  );
}

export default LayoutTitle;