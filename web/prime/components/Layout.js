import React, { useContext } from "react";

import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';
  return {
    root: {
      backgroundColor: isDark ? palette.background.default : '#fff',
      display: "flex",
      height: "auto",
    },
    title: {
      marginLeft: spacing(2),
    },
    toolbar: {
      backgroundColor: palette.primary.dark,
    }
  };
});

export function PrimaryLayout({ children }) {
  const manifest = useContext(ManifestContext);
  const classes = useStyles();

  const logo = (
    <img
      alt="fusion logo"
      height={32}
      src={"/static/images/fusion-logo-white.png"}
    />
  );

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar} variant='dense'>
          {logo}
          <Typography className={classes.title} variant='h6'>FUSION</Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}

export default PrimaryLayout;