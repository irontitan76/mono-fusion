import React, { useState } from 'react';
import gql from 'graphql-tag';
import pickBy from 'lodash.pickby';

import { AdModal } from 'components/Ad';
import Banner from 'components/Banner';
import Layout from 'components/Layout';
import InsightBar from 'components/InsightBar';

import Content from './content';

const GET_INSIGHTS = gql`
  query {
    documents(where: { type: INSIGHT }) {
      _id
      author {
        name {
          first
          last
          preferred
        }
        profile {
          avatar
        }
      }
      description
      media
      meta {
        featured
      }
      subtitle
      title
      type
    }
  }
`;

export function Insights() {
  const [filter, setFilter] = useState({});
  const [open, setOpen] = useState();
  const cleanedFilter = pickBy(filter, (o) => typeof o !== 'undefined');
  
  return (
    <Layout>
      <InsightBar filter={filter} setFilter={setFilter} />
      <Content filter={cleanedFilter} query={GET_INSIGHTS} />
      <Banner
        action={() => setOpen(true)}
        message='Subscribe to our insights'
        button='Sign up'
      />
      <AdModal open={open} setOpen={setOpen} />
    </Layout>
  );
}

export default Insights;