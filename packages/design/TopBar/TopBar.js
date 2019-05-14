import React from 'react';

import makeStyles from '@material-ui/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const getBorder = (property, palette) => (props) => { 
  const isDark = palette.type === 'dark';
  const borderColor = palette.grey[isDark ? 700 : 300];
  return props[property] === 'default' ? `1px solid ${borderColor}` : 'none';
};

const getColor = (palette) => (props) => {
  const color = props.color;
  return {
    color: palette.augmentColor(color === 'default' ? palette.grey : palette[color]),
  };
};

const useStyles = makeStyles(({ palette }) => {
  return {
    appBar: {
      borderBottom: getBorder('color', palette),
      position: 'sticky',
      top: 0,
    },
    center: {
      ...getColor(palette),
      display: 'flex',
      justifyContent: 'center', 
      textAlign: 'center',
    },
    leading: {
      ...getColor(palette),
      '& a': {
        textDecoration: 'none',
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-start', 
      textAlign: 'left',
    },
    toolbar: {
      boxShadow: 'none',
    },
    trailing: {
      ...getColor(palette),
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
        <Grid alignItems='center' container justify='center'>
          <Grid item xl={8} xs={12}>
            <Grid alignItems='center' container justify='space-between'>
              <Grid className={classes.leading} item xs={4}>
                {props.leading}
              </Grid>
              <Grid className={classes.center} item xs={4}>
                {props.center}
              </Grid>
              <Grid className={classes.trailing} item xs={4}>
                {props.trailing}
              </Grid>
            </Grid>
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