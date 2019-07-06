import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Typography } from '@material-ui/core';

import FullWidth from 'components/FullWidth';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  const isDark = palette.type === 'dark';
  const bg = !isDark ? `${palette.primary.light}1F` : 'rgba(15,15,15,1)';

  return {
    button: {
      borderRadius: 0,
      boxShadow: 'none',
    },
    container: {
      backgroundImage: `
        url(${require('static/images/mobile-2.png')}),
        linear-gradient(90deg, ${bg} 0%, ${bg} 11%,  ${palette.background.default} 100%)
      `,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      height: 640,
    },
    content: {
      maxWidth: 1440,
      paddingLeft: spacing(12),
    },
    item: {
      [breakpoints.down('sm')]: {  
        backgroundImage: `url(${require('static/images/mobile-banner-transparent-images-sm.png')})`,
      },
    },
    subtitle: {
      color: 'white',
      marginBottom: 32,
    },
    title: {
      color: 'white',
      fontSize: 50,
      fontWeight: 700,
    },
  };
});

export function MobileIntro() {
  const classes = useStyles();

  return (
    <FullWidth
      className={classes.container}
      itemProps={{ className: classes.item }}
    >
      <Grid
        alignItems='center'
        container
        justify='flex-start'
        style={{ height: '100%' }}
      >
        <Grid className={classes.content} item xs={6}>
          <Typography
            className={classes.title}
            component='h1'
            gutterBottom
            variant='h3'
          >
            Mobile Solutions
          </Typography>
          <Typography className={classes.subtitle} variant='subtitle1'>
            We deliver mobile services and solutions to 
            successfully implement a mobile experience for all of your
            end users.
          </Typography>
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
          >
            Read the insight
          </Button>
        </Grid> 
      </Grid>
    </FullWidth>
  );
}

export default MobileIntro;