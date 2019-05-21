import React from 'react';
import { Mutation, Query } from 'react-apollo';

import LinearProgress from '@material-ui/core/LinearProgress';
import MenuItem from '@material-ui/core/MenuItem';

import Editor from '@fusion/design/lib/Editor';
import InsightsApi from '@fusion/api/lib/insights';

export function Insight({ query }) {
  const categories = [{ label: 'Corporate', value: 'corporate' }];

  return (
    <Query query={InsightsApi.getOne} variables={{ id: query.id }}>
      {({ loading, error, data: { Insight } }) => {
        if (loading) return <LinearProgress />;
        if (error) return null;

        const fields = [
          {
            disabled: true,
            label: 'ID',
            value: Insight.id || '',
          },
          {
            label: 'Title',
            onChange: (event) =>
              InsightsApi.updateOneTitle(event.target.value, Insight.id, client),
            placeholder: 'Type a title here...',
            value: Insight.title || '',
          },
          {
            children: categories.map((category) => (
              <MenuItem key={category.label} value={category.value}>
                {category.label}
              </MenuItem>
            )),
            label: 'Category',
            value: Insight.category || '',
            select: true,
          },
          {
            label: 'Description',
            multiline: true,
            placeholder: 'Type a description (280 chars)...',
            rows: 3,
            rowsMax: 5,
            value: Insight.desc || '',
          },
        ];

        let currentValue;

        const onChange = (value) => {
          currentValue = value;
        };

        const onSubmit = (mutation, id, content) => {
          mutation({ variables: { id, content } });
        };

        return (
          <Mutation mutation={InsightsApi.updateOne}>
            {(updateOne) => {
              currentValue = Insight.content;

              return (
                <Editor
                  article={Insight}
                  onChange={onChange}
                  onSubmit={() => onSubmit(updateOne, Insight.id, currentValue)}
                  sidebar={{
                    fields,
                    title: 'Details',
                  }}
                />
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
}

Insight.getInitialProps = ({ query }) => {
  return { query };
};

export default Insight;
