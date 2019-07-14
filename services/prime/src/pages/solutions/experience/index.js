import React from 'react';

import { makeStyles } from '@material-ui/styles';
import FullWidth from '../../../components/FullWidth';

const useStyles = makeStyles(() => {
  return {
    fullWidth: {
      backgroundImage: `url(${require('../../../static/images/plane-1.jpg')})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: 700,
    }
  };
});

export function Experience() {
  const classes = useStyles();

  return (
    <FullWidth className={classes.fullWidth}>
      h
    </FullWidth>
  );
}

export default Experience;