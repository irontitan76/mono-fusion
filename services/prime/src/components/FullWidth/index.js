import React from 'react';
import clsx from 'clsx';
import omit from 'lodash.omit';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => {
  return {
    child: {
      height: '100%',
      maxWidth: 1440,
      paddingLeft: spacing(3),
      paddingRight: spacing(3),
      width: '100%',
    },
    container: {
      left: '50%',
      marginLeft: '-50vw',
      position: 'relative',
      width: '100vw',
    },
  };
});

export function FullWidth({ children, itemProps, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      alignItems='center'
      className={clsx(classes.container, rest ? rest.className : undefined)}
      container
      justify='center'
      {...omit(rest, 'className')}
    >
      <Grid
        className={clsx(classes.child, itemProps ? itemProps.className : undefined)}
        item
        {...omit(itemProps, 'className')}
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default FullWidth;