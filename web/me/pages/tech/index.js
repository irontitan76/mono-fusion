import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';

import Carousel from '@fusion/design/lib/_v2/Carousel/Carousel';

const useStyles = makeStyles(({ palette }) => {
  return {
    icon: {
      color: palette.text.primary,
    },
    slide: {
      alignItems: 'center',
      display: 'flex',
      fontSize: 42,
      fontWeight: 500,
      justifyContent: 'center',
    }
  };
});

export function Tech() {
  const classes = useStyles();

  return (
    <Carousel
      icons={[
        <FontAwesomeIcon className={classes.icon} icon={['fal', 'chevron-left']}/>,
        <FontAwesomeIcon className={classes.icon} icon={['fal', 'chevron-right']} />,
      ]}
      items={[
        <div className={classes.slide}>Hello</div>,
        <div className={classes.slide}>World</div>,
      ]}
    />
  );
};

export default Tech;