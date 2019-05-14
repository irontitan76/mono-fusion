import React, { useContext } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette, spacing }) => ({
  intro: {
    paddingBottom: spacing(9),
    paddingTop: spacing(8),
    width: '100%',
  },
  content: {
    paddingTop: spacing(4),
  },
  logo: {
    color: palette.primary.main,
    marginRight: spacing(5),
  },
  subtitle: {
    fontWeight: 300,
    paddingBottom: spacing(4),
  },
  title: {
    color: palette.text.primary,
    fontSize: 48,
    fontWeight: 400,
    letterSpacing: spacing(1.75),
    paddingBottom: spacing(4),
  },
}));

export function Intro({ logo, primaryButton, secondaryButton, slogan, title }) {
  const classes = useStyles();

  const Logo = () => {
    return (
      <Grid
        className={classes.logo}
        item
        xs={12}
      >
        <img src={logo} height={200} />
      </Grid>
    );
  };

  const BaseButton = ({ children, color, component, path }) => {
    const LinkComponent = component || 'a';

    const renderedButton = (
      <Button
        color={color}
        fullWidth
        variant='contained'
      >
        {children}
      </Button>
    )

    if (path) {
      return (
        <LinkComponent href={path} style={{ textDecoration: 'none' }}>
          {renderedButton}
        </LinkComponent>
      )
    }

    return renderedButton;
  }

  const PrimaryButton = ({ component }) => {

    return (
      <Grid item md={2}>
        <BaseButton color='primary' component={component} path={primaryButton.path}>
          {primaryButton.label}
        </BaseButton>
      </Grid>
    )
  };

  const SecondaryButton = ({ component }) => {

    return (
      <Grid item md={2}>
        <BaseButton color='default' component={component} path={secondaryButton.path}>
          {secondaryButton.label}
        </BaseButton>
      </Grid>
    )
  };

  const Slogan = () => {
    return (
      <Typography
        className={classes.subtitle}
        variant='h5'
      >
        {slogan}
      </Typography>
    );
  };

  const Title = () => {
    return (
      <Typography
        className={classes.title}
        variant='h1'
      >
        {title.toUpperCase()}
      </Typography>
    );
  };

  return (
    <Grid 
      alignItems='center' 
      className={classes.intro} 
      component='center' 
      container 
      justify='center'
      spacing={5}
    >
      <Logo />
      <Grid 
        className={classes.content}
        item
        xs={12}
      >
        <Title />
        <Slogan />
        
        <Grid container justify='center' spacing={4}>
          { primaryButton && <PrimaryButton label={primaryButton.label} path={primaryButton.path} /> }
          { secondaryButton && <SecondaryButton label={secondaryButton.label} path={secondaryButton.path} /> }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Intro;

Intro.defaultProps = {
  primaryButton: null,
  secondaryButton: null,
  slogan: '',
  title: '',
}