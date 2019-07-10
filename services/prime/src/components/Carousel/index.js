import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Radio, Slide, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => {
  return {
    action: {
      fontWeight: 400,
      marginBottom: spacing(2.5),
    },
    carousel: {
      height: '100%',
      overflowX: 'hidden',
      width: '100%',
    },
    content: {
      color: 'black',
      paddingLeft: spacing(10),
    },
    desc: {
      fontSize: 24,
      marginBottom: spacing(2.5),
    },
    item: {
      backgroundImage: ({ item }) => `url(${item.media.source})`,
      backgroundSize: '100% 100%',
      height: '100%',
      width: '100%',
    },
    selectors: {
      position: 'relative',
      top: -50,
      textAlign: 'center',
      width: '100%',
    },
    slide: {
      height: 640,
      marginTop: spacing(3),
    },
    title: {
      marginBottom: spacing(2.5),
    },
  };
});

export function CarouselItem({ item }) {
  const classes = useStyles({ item });

  return (
    <div className={classes.item}>
      <Grid
        alignItems='center'
        container
        style={{ height: '100%' }}
      >
        <Grid className={classes.content} item md={3}>
          <Typography className={classes.title}>
            {item.title}
          </Typography>
          <Typography className={classes.desc}>
            {item.description}
          </Typography>
          <Typography className={classes.action}>
            {item.action}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export function Carousel({ items }) {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState(false);
  const temp = selected;

  const id = setInterval(() => {
    if (hover) return null;
    
    return selected === items.length - 1
      ? setSelected(0)
      : setSelected(selected + 1);
  }, 5000);

  useEffect(() => {
    return () => clearInterval(id);
  });

  const selectors = items.map((slide, index) => {
    return (
      <Radio
        checked={selected === index}
        color='primary'
        key={slide.title}
        onClick={() => setSelected(index)}
      />
    );
  });

  return (

    <div className={classes.carousel}>
      <Grid
        className={classes.slide}
        container
        justify='center'
        key={selected}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >  
          <Grid item xs={12}>
            <Slide direction={temp === selected ? 'left' : 'right'} in={temp === selected} timeout={500}>
              <CarouselItem item={items[selected]} />
            </Slide>
          </Grid>
      </Grid>
      <div className={classes.selectors}>
        {selectors}
      </div>
    </div>
  );
}

export default Carousel;