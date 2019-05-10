import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const getImage = property => props => props[property].media ? `url(${props[property].media.source})` : 'none';
const getContrast = property => props => props.hero[property] && props.hero[property] === 'light' ? 'white' : 'black';

const useStyles = makeStyles(({ spacing }) => {
  return {
    hero: {
      '&:hover': {
        filter: 'none',
      },
      backgroundColor: '#eee',
      backgroundImage: getImage('hero'),
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      color: getContrast('variant'),
      cursor: 'pointer',
      filter: 'grayscale(40%)',
      height: 600,
    },
    heroAction: {
      fontWeight: 400,
      marginBottom: spacing(2.5),
    },
    heroContainer: {
      paddingBottom: spacing(5),
      paddingLeft: spacing(10),
      paddingRight: spacing(10),
      paddingTop: spacing(5),
    },
    heroContent: {
      height: '100%',
      paddingLeft: 100,
      width: '100%',
    },
    heroDescription: {
      fontWeight: 400,
      marginBottom: spacing(2.5),
    },
    heroTitle: {
      fontWeight: 400,
      marginBottom: spacing(2.5),
    },
  };
});

function Hero(props) {
  const classes = useStyles(props);
  const { component, hero } = props;

  const LinkComponent = component || 'a';

  return (
    <Fade in timeout={500}>
      <Grid className={classes.heroContainer} container justify='center'>
        <LinkComponent href={hero.path}>
          <Grid component='a' item xs={12}>
            <div className={classes.hero}>
              <Grid alignItems='center' className={classes.heroContent} container>
                <Grid item style={{ width: 250 }}>
                  <Typography
                    className={classes.heroTitle}
                    variant='h6'
                  >
                    {hero.title}
                  </Typography>
                  <Typography
                    className={classes.heroDescription}
                    variant='h5'
                  >
                    {hero.description}
                  </Typography>
                  <Typography
                    className={classes.heroAction}
                  >
                    {hero.action}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </LinkComponent>
      </Grid>
    </Fade>
  );
};

Hero.defaultProps = {
  component: 'a',
};

export default Hero;