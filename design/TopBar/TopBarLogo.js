import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/styles';

import { ManifestContext } from '@fusion/design/Provider/Manifest';

const useStyles = makeStyles(({ spacing }) => {
  return {
    logo: {
      height: 30,
      marginBottom: spacing(1),
      marginRight: spacing(1.25),
    },
  };
});

export default function TopBarLogo() {
  const classes = useStyles();
  const { company } = useContext(ManifestContext);

  return <img className={classes.logo} src={company.logo} />;
};