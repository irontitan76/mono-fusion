import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    container: {
      background: 'linear-gradient(top, rgba(227,227,227,1) 0%, rgba(227,227,227,1) 11%,  rgba(250,250,250,1) 100%)',
      height: 640,
      left: '50%',
      marginLeft: '-50vw',
      position: 'relative',
      width: '100vw',
    },
    content: {
      maxWidth: 1440,
      paddingLeft: spacing(8),
    },
    item: {
      backgroundImage: `url(${require('../../static/images/mobile-banner-transparent-lg.png')})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '100%',
      maxWidth: 1440,
      [breakpoints.down('sm')]: {  
        backgroundImage: `url(${require('../../static/images/mobile-banner-transparent-sm.png')})`,
      },
    }
  };
});

export function Mobile() {
  const classes = useStyles();

  return (
    <Grid
      alignItems='center'
      className={classes.container}
      container
      justify='center'
    >
      <Grid className={classes.item} item xs={12}>
        <Grid alignItems='center' container justify='flex-start' style={{ height: '100%' }}>
          <Grid className={classes.content} item xs={6}>
            <Typography
              component='h1'
              gutterBottom
              variant='h3'
            >
              MOBILE SOLUTIONS
            </Typography>
            <Typography style={{ marginBottom: 56 }} variant='subtitle1'>
              We deliver mobile services and mobile solutions to 
              successfully implement a mobile experience for all of your
              end users.
            </Typography>
            <Button variant='contained'>
              Learn more
            </Button>
          </Grid> 
        </Grid>
        <Grid item xs={12}>
          Hi
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Mobile; 