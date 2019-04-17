import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import Banner from '@fusion/design/Banner';
import Footer from '@fusion/design/Footer';
import TopBar, { TopBarMenu, TopBarTitle } from '@fusion/design/TopBar';

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
    menu: {
      '& a': {
        textDecoration: 'none',
      },
      '& p': {
        cursor: 'pointer',
        fontWeight: 300,
        '&:hover': {
          color: palette.primary.main,
        },
      }
    },
  }
});

export default function Layout({ bannerMessage, children, component, items }) {
  const classes = useStyles();

  return (
    <>
      <header className={classes.header}>
        <Banner 
          color='primary'
          message={bannerMessage} 
          name='maintenance-notification'
        />
        <TopBar
          center={<TopBarMenu component={Link} items={items} />}
          leading={<TopBarTitle />}
        />
      </header>
      <main className={classes.main}>
        {children}
      </main>
      <Footer 
        component={component}
        columns={[
          {
            items: [
              { name: 'Leadership', path: '/leadership' },
              { name: 'Career opportunities', path: '/careers' },
              { name: 'Locations', path: '/locations' },
              { name: 'Standards', path: '/insight?id=0001' },
              { name: 'Strategy', path: '/insight?id=0002' },
            ],
            title: 'Company',
          },
          {
            items: [
              { name: 'Innovators at heart', path: '/values?name=innovators-at-heart' },
              { name: 'Bias for righteous action', path: '/values?name=bias-for-righteous-action' },
              { name: 'Challenge respectfully', path: '/values?name=challenge-respectfully' },
              { name: 'Be compassionate', path: '/values?name=be-compassionate' },
              { name: 'Collaborate effectively', path: '/values?name=collaborate-effectively' },
            ],
            title: 'Values',
          },
          {
            items: [
              { name: 'Terms of Use', path: '/policy?title=Terms%20of%20Use' },
              { name: 'Privacy Policy', path: '/policy?title=Privacy%20Policy' },
              { name: 'Cookies', path: '/policy?title=Cookie%20Policy' },
            ],
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
        ]}
      />
    </>
  ); 
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};