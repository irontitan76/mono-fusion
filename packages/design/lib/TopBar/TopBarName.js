import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';

const useStyles = makeStyles(({ palette }) => {
  return {
    title: {
      color: palette.primary.main,
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: 4,
    },
  };
});

export default function TopBarName() {
  const classes = useStyles();
  const { application } = useContext(ManifestContext);

  return (
    <Typography className={classes.title}>{application.displayName}</Typography>
  );
}
