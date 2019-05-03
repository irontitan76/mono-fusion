import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';

import Drawer from '@fusion/design/Drawer';
import { TopBarLink, TopBarLogo, TopBarTitle } from '@fusion/design/TopBar';

const useStyles = makeStyles(({ palette }) => {
  return {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
    },
    icon: {
      margin: '0 auto',
      width: 24,
    },
    main: {
      background: palette.background.paper,
      display: 'flex',
      flex: 1,
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

export function Layout({ children, router }) {
  const classes = useStyles();

  // const Header = () => {
  //   return (
  //     <header className={classes.header}>
  //       <TopBar
  //         leading={<TopBarTitle />}
  //         {...TopBarProps}
  //       />
  //     </header>
  //   );
  // };

  return (
    <>
      <main className={classes.main}>
        <Drawer
          collapsedTitle={
            <TopBarLink LinkComponent={Link}>
              <TopBarLogo />
            </TopBarLink>
          }
          expandedTitle={<TopBarTitle LinkComponent={Link} />}
          items={[
            {
              icon: <FontAwesomeIcon className={classes.icon} icon={['fal', 'user-tie']} />,
              label: 'People',
              name: 'people',
              path: '/people',
            },
            {
              icon: <FontAwesomeIcon className={classes.icon} icon={['fal', 'project-diagram']} />,
              label: 'Projects',
              name: 'projects',
              path: '/projects',
            },
            {
              children: [
                {
                  icon: <FontAwesomeIcon className={classes.icon} icon={['fal', 'analytics']} />,
                  label: 'Analytics',
                  name: 'analytics',
                  path: '/analytics'
                },
                {
                  icon: <FontAwesomeIcon className={classes.icon} icon={['fal', 'binoculars']} />,
                  label: 'Insights',
                  name: 'insights',
                  path: '/insights'
                },
              ],
              icon: <FontAwesomeIcon className={classes.icon} icon={['fal', 'database']} />,
              label: 'Data',
              name: 'data',
            },
          ]}
          LinkComponent={Link}
          router={router}
        />
        {children}
      </main>
    </>
  ); 
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  TopBarProps: PropTypes.shape({}),
};

export default withRouter(Layout);