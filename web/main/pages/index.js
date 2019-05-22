import React from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import { manifest } from '@fusion/main/manifest';
import Hero from '@fusion/design/lib/Hero';
import InsightsApi from '@fusion/api/lib/insights';
import Intro from '@fusion/design/lib/Intro';
import NewsSlider from '@fusion/design/lib/NewsSlider';

const useStyles = makeStyles(({ spacing }) => {
  return {
    subheading: {
      paddingBottom: spacing(4),
    },
  };
});

export function Home() {
  const classes = useStyles();

  const heros = [
    {
      action: 'Learn more',
      description: 'Integrate our solutions into your existing workflow',
      media: {
        source: './static/images/building-2.jpg',
        type: 'image',
      },
      path: '/solutions',
      title: 'OUR SOLUTIONS',
      variant: 'dark',
    },
    {
      action: 'See how we work',
      description: 'Quicken development with our qualified consultants',
      media: {
        source: './static/images/people-4.jpg',
        type: 'image',
      },
      path: '/insight?id=cjv8ygn7k04ku0177uvx8chg9',
      title: 'OUR SERVICES',
      variant: 'dark',
    },
    {
      action: 'See our standard',
      description: 'Proven strategies that effectively grow your business',
      media: {
        source: './static/images/plant-1.jpg?resize&size=300',
        type: 'image',
      },
      path: '/insight?id=cjv8y928r03su01908ylxhpej',
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

      <Typography align="center" className={classes.subheading} variant="h5">
        Company News
      </Typography>

      <Query
        query={InsightsApi.getByCategory}
        variables={{ category: 'corporate news' }}
      >
        {({ loading, error, data: { allInsights, _allInsghtsMeta }, fetchMore }) => {
          if (loading) return null;
          if (error) return null;

          return (
            <NewsSlider
              component={Link}
              insights={allInsights}
              rounded={true}
              scroll={true}
              spacing={4}
            />
          );
        }}
      </Query>

      {heros.map((hero) => {
        return <Hero component={Link} hero={hero} key={hero.title} />;
      })}
    </>
  );
}

export default Home;
