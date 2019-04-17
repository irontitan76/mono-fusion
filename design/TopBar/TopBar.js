import React from 'react';

import makeStyles from '@material-ui/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(({ palette }) => {
  const isDark = palette.type === 'dark';
  const borderColor = palette.grey[isDark ? 700 : 'A100'];

  return {
    appBar: {
      borderBottom: `1px solid ${borderColor}`,
      position: 'sticky',
      top: 0,
    },
    center: {
      display: 'flex',
      justifyContent: 'center', 
      textAlign: 'center',
    },
    leading: {
      display: 'flex',
      justifyContent: 'flex-start', 
      textAlign: 'left',
    },
    toolbar: {
      boxShadow: 'none',
    },
    trailing: {
      display: 'flex',
      justifyContent: 'flex-end', 
      textAlign: 'right',
    }
  };
});

export default function TopBar(props) {
  const classes = useStyles(props);
  const { color, variant } = props;

  return (
    <AppBar className={classes.appBar} color={color} component='nav'>
      <Toolbar className={classes.toolbar} variant={variant}>
        <Grid alignItems='center' container justify='space-between'>
          <Grid  className={classes.leading} item xs={4}>
            {props.leading}
          </Grid>
          <Grid  className={classes.center} item xs={4}>
            {props.center}
          </Grid>
          <Grid className={classes.trailing} item xs={4}>
            {props.trailing}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  ); 
};

TopBar.defaultProps = {
  color: 'default',
  submenu: null,
  variant: 'dense',
};