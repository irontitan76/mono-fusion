import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { ButtonBase, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => {
  const isDark = palette.type === 'dark';
  const height = 400;
  return {
    button: {
      '&:hover': {
        '& svg': {
          transform: 'translateX(10px)',
        }
      },
      '& svg': {
        color: palette.primary.light,
        marginRight: spacing(2),
        transition: 'all .3s ease',
      },
      color: 'white',
    },
    ceo: {
      height,
      overflow: 'hidden',
    },
    bio: {
      backgroundColor: isDark ? '#eee' : '#111',
      height,
    },
    bioContainer: {
      height: '100%',
      paddingLeft: spacing(15),
      width: '100%',
      [breakpoints.down('sm')]: {
        paddingLeft: spacing(5),
        paddingRight: spacing(5),
      },
    },
    image: {
      '&:hover': {
        filter: 'none',
      },
      height,
      filter: 'grayscale(50%)',
      width: '100%',
    },
    name: {
      color: palette.primary.light,
      fontWeight: 600,
      marginBottom: spacing(1),
    },
    title: {
      color: isDark ? 'black' : 'white',
      marginBottom: spacing(2),
    },
  };
});

export function Ceo({ leader }) {
  const classes = useStyles();

  const image = (
    <Grid className={classes.ceo} item sm={6} xs={12}>
      <img
        alt={leader.name}
        className={classes.image}
        src={leader.image}
      />
    </Grid>
  );

  const bio = (
    <Grid className={classes.bio} item sm={6} xs={12}>
      <Grid
        alignItems='center'
        className={classes.bioContainer}
        container
        justify='center'
      >
        <Grid item xs={12}>
          <Typography
            className={classes.name}
            variant='h3'
          >
            {leader.name}
          </Typography>
          <Typography
            className={classes.title}
            variant='subtitle1'
          >
            {leader.title}
          </Typography>
          <ButtonBase className={classes.button} disableRipple>
            <FontAwesomeIcon icon={['fal', 'arrow-right']} />
            Read full bio
          </ButtonBase>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container justify='center'>
      {image}
      {bio}
    </Grid>
  );
};

export default Ceo;