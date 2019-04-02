import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/styles';

import { ManifestContext } from '@fusion/design/Provider/Manifest';

const useStyles = makeStyles(() => {
  return {
    logo: {
      height: 28,
      marginRight: 10,
    },
  };
});

export default function TopBarLogo() {
  const classes = useStyles();
  const { company } = useContext(ManifestContext);

  return <img className={classes.logo} src={company.logo} />;
};