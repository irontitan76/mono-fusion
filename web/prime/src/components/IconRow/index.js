import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    icon: {
      color: palette.secondary.dark,
      fontSize: 28,
      transition: 'all .3s ease-in-out',
    },
    iconContainer: {
      '&:hover': {
        border: `5px solid ${palette.primary.main}`,
      },
      border: `5px solid ${palette.secondary.main}`,
      // borderRadius: '50%',
      cursor: 'pointer',
      height: 60,
      margin: 'auto',
      marginBottom: spacing(2),
      textAlign: 'center',
      transition: 'all .3s ease-in-out',
      width: '70%',
    },
  };
});

export function Icon({ icon }) {
  const classes = useStyles();

  return (
    <Grid item style={{ flexBasis: '12.5%' }}>
      <Grid
        alignItems='center'
        container
        className={classes.iconContainer}
        justify='center'
      >
        <Grid item xs={12}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={icon.icon}
          />
        </Grid>
      </Grid>
      <Typography align='center'>{icon.name}</Typography>
    </Grid>
  )
}

export function IconRow({ icons }) {
  return (
    <Grid
      alignItems='center'
      container
      justify='center'
    >
      {icons.map((icon) => <Icon icon={icon} key={icon.name} />)}
    </Grid>
  );
}

export default IconRow;