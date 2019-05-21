import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/styles';

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';

const useStyles = makeStyles(({ spacing }) => {
  return {
    logo: {
      alignItems: 'center',
      display: 'flex',
      height: 30,
      marginRight: spacing(2),
    },
  };
});

export default function TopBarLogo() {
  const classes = useStyles();
  const { company } = useContext(ManifestContext);

  return <img className={classes.logo} src={company.logo} />;
}
