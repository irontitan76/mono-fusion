import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import { ManifestContext } from '@fusion/design/Provider/Manifest';

const useStyles = makeStyles(({ palette }) => {
  const isDark = palette.type === 'dark';
  const bgColor = isDark ? '#1d1d1d' : '#f2f2f2';
  const borderColor = palette.grey[isDark ? 700 : 'A100'];  

  return {
    footer: {
      backgroundColor: bgColor,
      borderTop: `1px solid ${borderColor}`,
      color: palette.getContrastText(palette.grey[200]),
      height: 150,
    }
  };
})

export default function Footer() {
  const classes = useStyles();
  const context = useContext(ManifestContext);

  return (
    <Grid className={classes.footer} container component='footer'>
      {context.company.name}
    </Grid>
  );
};