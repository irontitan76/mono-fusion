import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => {
  return {
    text: {
      color: 'inherit',
      fontSize: 12,
      fontWeight: 300,
      height: '100%',
      lineHeight: 2.75,
      textAlign: 'center',
    }
  };
});

export default function BannerMessage(props) {
  const classes = useStyles();
  const { message } = props;

  return (
    <Typography className={classes.text} component='div'>
      {message}
    </Typography>
  );
};

BannerMessage.defaultProps = {
  message: '',
};

