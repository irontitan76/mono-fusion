import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { ButtonBase, Grid, Typography } from '@material-ui/core';

import FullWidth from 'components/FullWidth';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';
  const bg = !isDark ? `#212121` : '#1d2026';
  const bgImage = require('static/images/data-2.png');
  const bgGradient = `linear-gradient(45deg, ${bg} 0%, ${bg} 11%, #111 100%)`;

  return {
    bg: {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '85% center',
    },
    button: {
      fontSize: 14,
      paddingRight: spacing(2),
    },
    container: {
      height: '100%',
    },
    fullWidth: {
      background: bgGradient,
      height: 'calc(100vh - 96px)',
    },
    icon: {
      marginTop: 12,
    },
    iconContainer: {
      '&:hover': {
        border: `4px solid ${palette.primary.dark}`,
        '& svg': {
          marginTop: 10,
        },
      },
      border: `2px solid ${palette.primary.main}`,
      borderRadius: '50%',
      boxSizing: 'border-box',
      fontSize: 20,
      height: 48,
      marginRight: spacing(2),
      width: 48,
    },
    item: {
      color: 'white',
      marginLeft: spacing(10),
    },
    subtitle: {
      color: 'inherit',
      marginBottom: spacing(2),
    },
    title: {
      color: 'inherit',
      fontWeight: 700,
      marginBottom: spacing(2),
    },
  };
});

export function DataIntro() {
  const classes = useStyles();

  return (
    <FullWidth
      className={classes.fullWidth}
      itemProps={{ className: classes.bg }}
    >
      <Grid
        alignItems='center'
        className={classes.container}
        container
      >
        <Grid className={classes.item} item md={5} xs={8}>
          <Typography className={classes.title} variant='h3'>
            Data Solutions
          </Typography>
          <Typography className={classes.subtitle} variant='subtitle1'>
            From analytics, metrics, visualizations, to schema creation 
            and database design, Fusion can solve all of your data needs.
          </Typography>
          <ButtonBase className={classes.button} disableRipple>
            <div className={classes.iconContainer}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={['fal', 'database']}
              />
            </div>
            Learn more
          </ButtonBase>
        </Grid>
      </Grid>
    </FullWidth>
  );
}

export default DataIntro;