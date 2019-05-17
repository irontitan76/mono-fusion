import React from 'react';
import { Mutation, Query } from 'react-apollo';

import LinearProgress from '@material-ui/core/LinearProgress';

import Editor from '@fusion/design/Editor';
import PoliciesApi from '@fusion/api/policies';

export function Policy({ query }) {
  return (
    <Query query={PoliciesApi.getOne} variables={{ id: query.id }}>
      {({ loading, error, data: { Policy } }) => {
        if (loading) return <LinearProgress />;
        if (error) return null;

        const fields = [
          {
            disabled: true,
            label: 'ID',
            value: Policy.id || '',
          },
          {
            label: 'Title',
            placeholder: 'Type a title here...',
            value: Policy.title || '',
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
          <Mutation mutation={PoliciesApi.updateOne}>
            {(updateOne) => {
              currentValue = Policy.content;

              return (
                <Editor
                  article={Policy}
                  // onChange={(value) => updateOne({ variables: { id: Policy.id, content: value }})}
                  onChange={onChange}
                  onSubmit={() => onSubmit(updateOne, Policy.id, currentValue)}
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

Policy.getInitialProps = ({ query }) => {
  return { query };
};

export default Policy;
