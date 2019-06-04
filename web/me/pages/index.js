import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';

import Carousel from '@fusion/design/lib/_v2/Carousel/Carousel';
import Page from '../layouts/Page';

const useStyles = makeStyles(() => {
  return {
    page: {
      padding: 0,
    },
    slide: {
      alignItems: 'center',
      display: 'flex',
      fontSize: 42,
      fontWeight: 500,
      height: 'calc(100vh - 100px)',
      justifyContent: 'center',
    }
  };
});

export function Home() {
  const classes = useStyles();

  return (
    <Page
      ItemProps={{ className: classes.page}}
      SlideoutProps={{ title: "Details" }}
      TitleBarProps={{ buttonLabel: "Manage Home", title: "Home" }}
    >
      <Carousel
        icons={[
          <FontAwesomeIcon className={classes.icon} icon={['fal', 'chevron-left']}/>,
          <FontAwesomeIcon className={classes.icon} icon={['fal', 'chevron-right']} />,
        ]}
        items={[
          <div className={classes.slide}>Hello</div>,
          <div className={classes.slide}>World</div>,
          <div className={classes.slide}>World</div>,
          <div className={classes.slide}>World</div>,
          <div className={classes.slide}>World</div>,
          <div className={classes.slide}>World</div>,
          <div className={classes.slide}>World</div>,
          <div className={classes.slide}>World</div>,
        ]}
        ratio={3}
      />
    </Page>
  );
}

export default Home;