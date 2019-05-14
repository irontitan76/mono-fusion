import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import { ManifestContext } from '@fusion/design/Provider/Manifest';

const useStyles = makeStyles(({ palette }) => {
  const isDark = palette.type === 'dark';
  const color = isDark ? '#999' : '#777';

  return { 
    version: {
      color,
      fontSize: 10,
      fontWeight: 300,
      letterSpacing: 'initial',
    },
  };
});

export default function TopBarLogo() {
  const classes = useStyles();
  const { application } = useContext(ManifestContext);

  return <Typography className={classes.version}>
    {application.version}
  </Typography>;
};