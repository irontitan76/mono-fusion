import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import ArticleHeader from './ArticleHeader';
import Markdown from '@fusion/design/Markdown';

const useStyles = makeStyles(({ spacing }) => {
  return {
    item: {
      paddingBottom: spacing(3),
      paddingLeft: spacing(3),
      paddingRight: spacing(3),
      paddingTop: spacing(7),
    },
  };
});

function Article({ article }) {
  const classes = useStyles();

  if (!article.title && !article.content) {
    return <LinearProgress variant="query" />;
  }

  return (
    <Grid container justify="center">
      <Grid className={classes.item} item md={8} xs={12}>
        <ArticleHeader
          author={article.authorId}
          published={article._publishedAt}
          title={article.title}
        />
        <Markdown content={article.content} />
      </Grid>
    </Grid>
  );
}

export default Article;
