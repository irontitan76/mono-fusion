import React from 'react';

import { makeStyles  } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import FullWidth from 'components/FullWidth';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  return {
    container: {
      position: 'relative',
      top: 250,
      [breakpoints.down('sm')]: {
        top: 175,
      },
    },
    intro: {
      background: `
        radial-gradient(circle, rgba(0,0,0,.4), rgba(0,0,0,.8)),
        url(${require('static/images/fusion-4.png')})
      `,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: 675,
    },
    item: {
      background: `
        radial-gradient(ellipse at top, transparent, #11112240),
        radial-gradient(ellipse at bottom, transparent, ${palette.primary.light}99)
      `,
      height: '100%',
      maxWidth: '100%',
    },
    logo: {
      marginRight: spacing(6),
      [breakpoints.down('sm')]: {
        marginBottom: spacing(3),
      },
    },
    subtitle: {
      color: 'white',
      fontSize: 18,
      letterSpacing: 1.1,
      marginRight: -1.1,
      paddingLeft: 7,
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    title: {
      color: 'white',
      letterSpacing: spacing(3),
      [breakpoints.down('sm')]: {
        fontSize: 64,
        marginBottom: spacing(2),
        marginRight: -spacing(3),
        textAlign: 'center',
      },
    },
  };
});

export function HomeIntro() {
  const classes = useStyles();

  const logo = (
    <Grid className={classes.logo} item>
      <img
        alt='logo'
        src={require('static/images/fusion-logo-white.svg')}
        height={150}
      />
    </Grid>
  );

  return (
    <FullWidth
      className={classes.intro} id="intro"
      itemProps={{ className: classes.item }}
    >
      <Grid
        alignItems='center'
        className={classes.container}
        container
        justify='center'
        style={{ width: '100%' }}
      >
        {logo}
        <Grid item>
          <Typography
            className={classes.title}
            component='div'
            variant='h1'
          >
            FUSION
          </Typography>
          <Typography className={classes.subtitle}>
            Optimizing business through intelligent design
          </Typography>
        </Grid>
      </Grid>
    </FullWidth>
  );
};

export default HomeIntro;