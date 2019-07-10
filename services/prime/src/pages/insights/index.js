import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { gql } from 'apollo-boost';
import pickBy from 'lodash.pickby';


import { AdModal } from '../../components/Ad';
import Banner from '../../components/Banner';
import InsightBar from '../../components/InsightBar';
import Layout from '../../components/Layout';

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
      <Helmet>
        <title>Fusion Industries | Insights Engine</title>
      </Helmet>
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