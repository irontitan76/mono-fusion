import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Card, CardContent, CardHeader, Slide, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  const cardHeight = 400;

  return {
    avatar: {
      backgroundColor: 'transparent',
      border: `4px solid ${palette.primary.main}`,
      borderRadius: '50%',
      color: palette.primary.main,
      height: 72,
      margin: 'auto',
      width: 72,
    },
    card: {
      backgroundSize: '100% 100%',
      borderTop: `5px solid ${palette.secondary.main}`,
      cursor: 'pointer',
      height: cardHeight,
    },
    container: {
      background: 'linear-gradient(to bottom,rgba(0,0,0,.75),rgba(0,0,0,0))',
      height: cardHeight,
      position: 'relative',
      zIndex: 1,
    },
    content: {
      '& p': {
        fontSize: 15,
        fontWeight: 500,
      },
      color: 'white',
      padding: spacing(1),
    },
    description: {
      fontWeight: 300,
    },
    subheader: {
      color: 'white',
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    header: {
      position: 'relative',
      zIndex: 3,
    },
    icon: {
      color: 'white',
      fontSize: 28,
    },
    slide: {
      backgroundColor: 'rgba(0,0,0,.55)',
      height: '100%',
      paddingTop: spacing(15),
      position: 'absolute',
      top: 0,
      zIndex: 2,
    },
    title: {
      color: 'white',
      fontWeight: 700,
      marginBottom: spacing(1),
      textTransform: 'uppercase',
    },
  };
});

export function SlideCardHover({ hover, item }) {
  const classes = useStyles();

  const avatar = (
    <Avatar className={classes.avatar}>
      <FontAwesomeIcon
        className={classes.icon}
        icon={item.icon}
        size='2x'
      />
    </Avatar>
  );

  const content = (
    <CardContent className={classes.content}>
      <Typography
        align='center'
        className={classes.description}
      >
        {item.desc}
      </Typography>
    </CardContent>
  );

  return (
    <Slide
      className={classes.slide}
      direction='up'
      in={hover}
      timeout={500}
    >
      <div>
        {avatar}
        {content}
      </div>
    </Slide>
  );
};

export function SlideCard({ item }) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  const header = (
    <CardHeader
      className={classes.header}
      subheader={item.subtitle}
      subheaderTypographyProps={{
        align: 'center',
        className: classes.subheader
      }}
      title={item.name}
      titleTypographyProps={{
        align: 'center',
        className: classes.title
      }}
    />
  );

  return (
    <Grid item md={3} xs={12}>
      <Card
        className={classes.card}
        elevation={0}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      >
        <div className={classes.container}>
          {header}
          {
            hover 
            ? <SlideCardHover hover={hover} item={item} /> 
            : null
          }
        </div>
      </Card>
    </Grid>
  );
};

export default SlideCard;