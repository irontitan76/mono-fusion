import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import NewsSlider from '@fusion/design/NewsSlider';
import getInsights from '@fusion/api/insights';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    logo: {
      cursor: 'pointer',
    },
    media: {
      height: 150,
    },
    separator: {
      color: palette.primary.main,
      lineHeight: .5,
      fontSize: 32,
      fontWeight: 700,
    },
    title1: {
      fontSize: 18,
      fontWeight: 500,
    },
    title2: {
      fontSize: 18,
      fontWeight: 300,
    },
    toolbar: {
      backgroundColor: '#fff',
      borderBottom: `1px solid ${palette.grey[300]}`,
      display: 'flex',
      height: 48,
      paddingLeft: spacing(3),
      paddingRight: spacing(3),
      position: 'sticky',
      zIndex: 1,
    },
  };
});

function Insights() {
  const classes = useStyles();
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    if (insights.length === 0 ) {
      getInsights().then((result) => {
        setInsights(result.data.data.insights);
      });
    }

    return () => console.log('unmounted');
  });

  const Logo = () => {
    return (
      <Grid className={classes.logo} item>
        <Link href='/insights'>
          <Typography>
            <span className={classes.title1}>insights</span>
            <span className={classes.separator}>.</span>
            <span className={classes.title2}>engine</span>
          </Typography>
        </Link>
      </Grid>
    );
  };

  const SearchInput = () => {
    return (
      <Grid item md={3}>
        <TextField
          autoFocus
          fullWidth
          InputProps={{
            startAdornment: <FontAwesomeIcon icon={['fal', 'search']} />,
          }}
          inputProps={{ style: { padding: 8, fontSize: 14, }}}
          placeholder='Search insights...'
          variant='outlined'
        />
      </Grid>
    );
  };

  const Filter = () => {
    return (
      <Grid item>
        <Button
          color='primary'
          onClick={() => { console.log('hello')}}
        >
          <FontAwesomeIcon icon={['fal', 'filter']} style={{ marginRight: 8 }} />
          Filter
        </Button>
      </Grid>
    );
  };

  const InsightsBar = () => {
    return (
      <div className={classes.toolbar} variant='dense'>
        <Grid alignItems='center' container justify='space-between'>
          <Logo />
          <SearchInput />
          <Filter />
        </Grid>
      </div>
    );
  };

  return (
    <>
      <InsightsBar />
      <div style={{ marginBottom: 50 }} />
      <NewsSlider 
        component={Link}
        insights={insights}
        mediaHeight={150} 
        size={{ md: 3 }}
      />
    </>
  );
}

export default Insights;