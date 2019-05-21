import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const getImage = () => (props) => {
  if (!props.story) return null;
  return `url(${props.story.media.source})`;
};

const useStyles = makeStyles(() => {
  return {
    featuredStory: {
      '&:hover': {
        filter: 'grayscale(50%)',
      },
      backgroundImage: getImage('story'),
      backgroundSize: '120% 150%',
      cursor: 'pointer',
      height: 400,
    },
    story: {
      '&:hover': {
        filter: 'grayscale(50%)',
      },
      backgroundImage: getImage('story'),
      backgroundSize: 'cover',
      cursor: 'pointer',
      height: '33.33%',
    },
  };
});

export function Home() {
  const stories = [
    {
      name: 'Test 1',
      media: {
        source: './static/images/building-1.jpg',
        type: 'image',
      },
    },
    {
      name: 'Test 2',
      media: {
        source: './static/images/desk-laptop.jpg',
        type: 'image',
      },
    },
    {
      name: 'Test 3',
      media: {
        source: './static/images/space-1.jpg',
        type: 'image',
      },
    },
  ];

  const FeaturedStory = (props) => {
    const classes = useStyles(props);

    return (
      <Grid className={classes.featuredStory} item md={9} xs={12}>
        <Grid alignItems="flex-end" container style={{ height: '100%' }}>
          <Grid
            item
            style={{
              backgroundColor: 'rgba(0,0,0,.35)',
              color: 'white',
              padding: 5,
              width: '60%',
            }}
          >
            <Typography>{props.story.name}</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  stories.unshift();

  const Stories = ({ stories }) => {
    return stories.map((story) => {
      const classes = useStyles({ story });

      return (
        <Grid className={classes.story} item key={story.name} xs={12}>
          <Grid alignItems="flex-end" container style={{ height: '100%' }}>
            <Grid
              item
              style={{
                backgroundColor: 'rgba(0,0,0,.35)',
                color: 'white',
                padding: 5,
                width: '100%',
              }}
            >
              <Typography>{story.name}</Typography>
            </Grid>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <>
      <Grid container style={{ padding: 35 }}>
        <FeaturedStory story={stories[0]} />
        <Grid item md={3}>
          <Grid container style={{ height: 400 }}>
            <Stories stories={stories} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
