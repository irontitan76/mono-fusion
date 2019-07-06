import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    leader: {
      '&:first-of-type': {
        borderLeft: `1px solid ${palette.grey[isDark ? 'A700' : 300]}`,
      },
      "& .unfilled": {
        backgroundColor: palette.background.paper,
        borderRight: `1px solid ${palette.grey[isDark ? 'A700' : 300]}`,
        height: 300,
      },
      backgroundColor: isDark ? '#eee' : '#212121',
      cursor: ({ leader }) => leader && leader.unfilled ? 'pointer' : 'auto',
      textDecoration: 'none',
    },
    image: {
      '&:hover': {
        filter: 'none',
      },
      filter: 'grayscale(100%)',
      height: 350,
      width: '100%',
    },
    name: {
      color: palette.primary.main,
      fontWeight: 700,
      paddingTop: spacing(2),
    },
    title: {
      color: isDark ? 'black' : 'white',
      height: 50,
    },
    unfilledIcon: {
      color: palette.grey[300],
      fontSize: 72,
      textAlign: 'center',
    },
  };
});

export function Leader({ leader }) {
  const classes = useStyles({ leader });

  const unfilled = (
    <Grid
      alignItems='center'
      className='unfilled'
      container
      justify='center'
    >
      <Grid item>
        <FontAwesomeIcon
          className={classes.unfilledIcon}
          icon={['fal', 'user-tie']}
        />
      </Grid>
    </Grid>
  );

  const exec = (
    <img
      alt={leader.name}
      className={classes.image}
      src={leader.image}
    />
  );

  return (
    <Grid
      className={classes.leader}
      component={leader.unfilled ? Link : undefined}
      item
      md={3}
      to={leader.unfilled ? '/careers' : undefined}
    >
      {leader.unfilled ? unfilled : exec}
      <Typography
        align='center'
        className={classes.name}
        variant='h6'
      >
        {leader.unfilled ? 'Apply for position' : leader.name}
      </Typography>
      <Typography
        align='center'
        className={classes.title}
        variant='subtitle1'
      >
        {leader.title}
      </Typography>
    </Grid>
  );
}

export default Leader;