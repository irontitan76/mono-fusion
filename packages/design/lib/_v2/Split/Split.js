import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => {
  return {};
});

export function Split({ children }) {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" spacing={5}>
      <Grid item md={10} xl={10} xs={12}>
        {children[0]}
      </Grid>
      <Grid
        item
        md={2}
        xl={2}
        xs={12}
      >
        {children[1]}
      </Grid>
    </Grid>
  );
};

Split.propTypes = {};

export default Split;