import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    button: {
      boxSizing: 'border-box',
      borderRadius: '0 3px 3px 0',
      color: 'black',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: 'bold',
      height: '100%',
      padding: '16px',
      position: 'absolute',
      top: 0,
      transition: '0.6s ease',
      userSelect: 'none',
      width: 'auto',
    },
    buttonBack: {
      left: 0,
    },
    buttonNext: {
      right: 0,
    },
    carousel: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      boxSizing: 'border-box',
      height: 'auto',
      scrollBehavior: 'smooth',
      overflowX: 'scroll',
      '-webkit-overflow-scrolling': 'touch',
      '-ms-overflow-style': '-ms-autohiding-scrollbar',
    },
    container: {
      boxSizing: 'border-box',
      margin: 'auto 0',
      position: 'relative',
    },
    item: {
      boxSizing: 'border-box',
      flex: '1 0 auto',
    }
  };
});

export function Carousel({ icons, items, ratio }) {
  const classes = useStyles();

  const onBack = () => {
    const element = document.getElementById("carousel");
    const width = element.offsetWidth;
    return element.scrollLeft -= width / ratio;
  };

  const onNext = () => {
    const element = document.getElementById("carousel");
    const width = element.offsetWidth;

    if (element.scrollWidth - (element.scrollLeft + element.offsetWidth) <= 1) {
      return element.scrollLeft = 0;
    }

    return element.scrollLeft += width / ratio;
  };

  const BackButton = () => {
    if (items.length / ratio <= 1) return null;

    return (
      <Button
        className={clsx(classes.button, classes.buttonBack)}
        onClick={onBack}
      >
        {icons[0]}
      </Button>
    );
  };

  const NextButton = () => {
    if (items.length / ratio <= 1) return null;

    return (
      <Button
        className={clsx(classes.button, classes.buttonNext)}
        onClick={onNext}
      >
        {icons[1]}
      </Button>
    );
  };

  const CarouselItems = ({ items }) => {
    return items.map((item, index) => (
      <Grid
        className={classes.item}
        item
        key={index}
        style={{
          height: '100%',
          width: `calc(100% / ${ratio})`
        }}
      >
        {item}
      </Grid>
    ));
  };

  return (
    <div className={classes.container}>
      <Grid
        alignItems='center'
        className={classes.carousel}
        container
        id="carousel"
        wrap='nowrap'
      >
        <CarouselItems items={items} />
        <BackButton />
        <NextButton />  
      </Grid>
    </div>
  );
};

Carousel.defaultProps = {
  icons: ['back', 'next'],
  items: [],
  ratio: 1,
};

export default Carousel;