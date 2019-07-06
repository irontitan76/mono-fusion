import React, { useEffect } from 'react';

import { makeStyles  } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import FullWidth from 'components/FullWidth';

const useStyles = makeStyles(({ palette }) => {
  return {
    intro: {
      background: `
        radial-gradient(circle, rgba(0,0,0,.4), rgba(0,0,0,.8)),
        url(${require('static/images/fusion-4.png')})
      `,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      height: 675,
    },
    container: {
      background: `
        radial-gradient(ellipse at top, transparent, #11112240),
        radial-gradient(ellipse at bottom, transparent, ${palette.primary.light}99)
      `,
      height: '100%',
      maxWidth: '100%',
    },
    subtitle: {
      // color: palette.grey[isDark ? 200 : 500],
      color: 'white',
      fontSize: 18,
      letterSpacing: 1.1,
      paddingLeft: 7,
    },
    title: {
      // color: palette.grey[isDark ? 300 : 700],
      color: 'white',
      letterSpacing: 23,
    },
    logo: {
      marginRight: 50,
    },
  };
});

export function HomeIntro() {
  const classes = useStyles();
  
  useEffect(() => {
    // https://itnext.io/how-to-use-plain-three-js-in-your-react-apps-417a79d926e0
    // https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
    // window.VANTA.DOTS({
    //   el: "#intro",
    //   color: theme.palette.primary.main,
    //   color2: theme.palette.background.default,
    //   backgroundColor: theme.palette.background.default,
    // });
  });

  const logo = (
    <Grid className={classes.logo} item>
      <img
        alt='logo'
        src={require('static/images/fusion-logo-white.svg')}
        height={150}
      />
    </Grid>
  );

  return (
    <FullWidth
      className={classes.intro} id="intro"
      itemProps={{ className: classes.container }}
    >
      <Grid
        alignItems='center'
        container
        justify='center'
        style={{ height: '100%' }}
      >
        {logo}
        <Grid item>
          <Typography
            className={classes.title}
            component='div'
            variant='h1'
          >
            FUSION
          </Typography>
          <Typography className={classes.subtitle}>
            Optimizing business through intelligent design
          </Typography>
        </Grid>
      </Grid>
    </FullWidth>
  );
};

export default HomeIntro;