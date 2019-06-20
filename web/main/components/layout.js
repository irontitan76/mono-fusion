import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';

import Banner from '@fusion/design/lib/Banner';
import Footer from '@fusion/design/lib/Footer';
import TopBar, { TopBarMenu, TopBarTitle } from '@fusion/design/lib/TopBar';

const useStyles = makeStyles(({ palette }) => {
  return {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
    },
    main: {
      background: palette.background.default,
      minHeight: '100vh',
    },
  };
});

const GET_POLICIES = gql`
  query {
    documents(where: { category: CORPORATE, type: POLICY }) {
      _id
      title
    }
  }
`;


export default function Layout({ children, component, items, TopBarProps }) {
  const classes = useStyles();

  const footerColumns = (allPolicies) => [
    {
      items: [
        { name: 'Leadership', path: '/leadership' },
        { name: 'Career opportunities', path: '/careers' },
        { name: 'Locations', path: '/locations' },
        { name: 'Standards', path: '/insight?id=5cfcb95802743900079c6388' },
        { name: 'Strategy', path: '/insight?id=5cfcb95e02743900079c6389' },
      ],
      title: 'Company',
    },
    {
      items: [
        { name: 'Innovators at heart', path: '/values?name=innovators-at-heart' },
        {
          name: 'Bias for righteous action',
          path: '/values?name=bias-for-righteous-action',
        },
        {
          name: 'Challenge respectfully',
          path: '/values?name=challenge-respectfully',
        },
        { name: 'Be compassionate', path: '/values?name=be-compassionate' },
        {
          name: 'Collaborate effectively',
          path: '/values?name=collaborate-effectively',
        },
      ],
      title: 'Values',
    },
    {
      items: allPolicies.map((policy) => {
        return { name: policy.title, path: `/policy?id=${policy._id}` };
      }),
      title: 'Policy',
    },
    {
      items: [
        { name: 'Instagram', path: 'https://instagram.com/fusion' },
        { name: 'Twitter', path: 'https://twitter.com/fusion' },
        { name: 'Facebook', path: 'https://facebook.com/fusion' },
        { name: 'LinkedIn', path: 'https://youtube.com/in/fusion' },
        { name: 'YouTube', path: 'https://youtube.com/fusion' },
      ],
      title: 'Social',
    },
  ];

  return (
    <>
      <header className={classes.header} id="header">
        <Banner
          color="primary"
          message="This site is under maintenance. Please bear with us as we optimize your experience."
          name="maintenance-notification"
        />
        <TopBar
          center={<TopBarMenu component={component} items={items} />}
          leading={<TopBarTitle />}
          {...TopBarProps}
        />
      </header>
      {children}
      <Query query={GET_POLICIES}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return null;
          
          return (
            <Footer component={component} columns={footerColumns(data.documents || [])} />
          );
        }}
      </Query>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  TopBarProps: PropTypes.shape({}),
};
