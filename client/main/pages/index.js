import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import { manifest } from '../../__config__/main.manifest';
import Hero from '@fusion/design/Hero';
import Intro from '@fusion/design/Intro';
import NewsSlider from '@fusion/design/NewsSlider';

import insightsApi from '@fusion/api/insights';

const useStyles = makeStyles(({ spacing }) => {
  return {
    subheading: {
      paddingBottom: spacing(4),
    }
  }
});

export function Home() {
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (news.length === 0 ) {
      insightsApi.getNews().then((result) => {
        setNews(result.data.data.insights);
      });
    }

    return () => console.log('unmounted');
  });

  const heros = [
    {
      action: 'Learn more',
      description: 'Integrate our solutions into your existing workflow',
      // media: {
      //   source: '/static/images/building-2.jpg',
      //   type: 'image',
      // },
      path: '/insight?id=0002',
      title: 'OUR SOLUTIONS',
      variant: 'dark',
    },
    {
      action: 'See how we work',
      description: 'Quicken development with our qualified consultants',
      media: {
        source: '/static/images/coder-5.jpg',
        type: 'image',
      },
      path: '/insight?id=0002',
      title: 'OUR SERVICES',
      variant: 'dark',
    },
    {
      action: 'See our standard',
      description: 'Proven strategies that effectively grow your business',
      media: {
        source: '/static/images/process-2.jpg',
        type: 'image',
      },
      path: '/insight?id=0001',
      title: 'OUR PROCESS',
      variant: 'dark',
    },
  ];

  return (
    <>
      <Intro
        logo={manifest.company.logo}
        slogan={manifest.company.slogan}
        title={manifest.company.name}
      />

      <Typography 
        align='center'
        className={classes.subheading}
        variant='h5'
      >
        Company News
      </Typography>

      <NewsSlider
        component={Link}
        insights={news}
        rounded={true}
        scroll={true}
        spacing={4}
      />

      {heros.map((hero) => {
        return <Hero component={Link} hero={hero} key={hero.title} />
      })}
     </>
  );
};

export default Home;