import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import NewsSlider from '@fusion/design/NewsSlider';
import Search from '@fusion/design/Search';
import insightsApi from '@fusion/api/insights';

const useStyles = makeStyles(() => {
  return {};
});

function Insights() {
  const classes = useStyles();
  const [filtered, setFiltered] = useState([]);
  const [insights, setInsights] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!insights || insights.length === 0 ) {
      insightsApi.getAll().then((result) => {
        setInsights(result.data.data.insights);
        setFiltered(result.data.data.insights);
      });
    }

    return () => console.log('unmounted');
  });

  const onChange = (event) => {
    const val = event.target.value;
    setSearch(val);

    const filteredInsights = insights.filter((insight) => {
      const { desc, title } = insight;

      if (val === '') return insights;

      return (desc + title).toLowerCase().includes(val.toLowerCase());
    });

    setFiltered(filteredInsights);
  };

  let content;
  if (!insights || insights.length === 0) {
    content = <LinearProgress />;
  } else {
    content = (
      <>
        <div style={{ marginBottom: 50 }} />
        <NewsSlider 
          component={Link}
          insights={filtered}
          mediaHeight={150} 
          size={{ md: 3 }}
        />
      </>
    );
  }

  return (
    <>
      <Search 
        component={Link}
        filterIcon={<FontAwesomeIcon icon={['fal', 'filter']} style={{ marginRight: 8 }} />}
        onChange={onChange}
        searchIcon={<FontAwesomeIcon icon={['fal', 'search']} />}
        searchValue={search}
      />
      {content}
    </>
  );
}

export default Insights;