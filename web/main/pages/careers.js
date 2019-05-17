import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ palette }) => {
  return {
    container: {},
    content: {
      backgroundColor: palette.background.paper,
      borderBottom: `1px solid ${palette.grey[300]}`,
      height: 500,
    },
    submenu: {
      backgroundColor: palette.background.paper,
      borderBottom: `1px solid ${palette.grey[300]}`,
      height: 75,
    },
  };
});

function Leadership() {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container justify="center">
      <Grid className={classes.submenu} item xs={12} />
      <Grid className={classes.content} item xs={12}>
        <Grid container>
          <Grid item md={2} xs={12} />
          <Grid item md={4} xs={12}>
            Careers
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Leadership;
