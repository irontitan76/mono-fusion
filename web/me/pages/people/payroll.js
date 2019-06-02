import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import TitleBar from '@fusion/design/lib/_v2/TitleBar/TitleBar';

const useStyles = makeStyles(({ spacing }) => {
  return {
    root: {
      '& main': {
        paddingLeft: spacing(5),
        paddingRight: spacing(5),
      }
    }
  };
});

export function Payroll() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <TitleBar buttonLabel="Hello" title="Payroll" />
      <Grid component='main' item xs={12}>
        Yay
      </Grid>
    </Grid>
  );
}

export default Payroll;

