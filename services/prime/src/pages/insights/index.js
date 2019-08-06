import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import gql from 'graphql-tag';
import pickBy from 'lodash.pickby';

import { AdModal, Banner, InsightBar, Layout } from '@fusion/visual';

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
      <Helmet title="Insights Engine" />
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