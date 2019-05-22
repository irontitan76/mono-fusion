import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';

import Drawer from '@fusion/design/lib/Drawer';
import { TopBarTitle } from '@fusion/design/lib/TopBar';

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
      },
    },
  };
});

export function Layout({ children, component, router }) {
  const classes = useStyles();

  const title = <TopBarTitle LinkComponent={component} />;

  return (
    <>
      <main className={classes.main}>
        <Drawer
          collapsedTitle={title}
          expandedTitle={title}
          items={[
            {
              icon: (
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={['fal', 'user-tie']}
                />
              ),
              label: 'People',
              name: 'people',
              path: '/people',
            },
            {
              icon: (
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={['fal', 'project-diagram']}
                />
              ),
              label: 'Projects',
              name: 'projects',
              path: '/projects',
            },
            {
              children: [
                {
                  icon: (
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={['fal', 'analytics']}
                    />
                  ),
                  label: 'Analytics',
                  name: 'analytics',
                  path: '/analytics',
                },
                {
                  icon: (
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={['fal', 'binoculars']}
                    />
                  ),
                  label: 'Insights',
                  name: 'insights',
                  path: '/insights',
                },
                {
                  icon: (
                    <FontAwesomeIcon
                      className={classes.icon}
                      icon={['fal', 'file-contract']}
                    />
                  ),
                  label: 'Policies',
                  name: 'policies',
                  path: '/policies',
                },
              ],
              icon: (
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={['fal', 'database']}
                />
              ),
              label: 'Data',
              name: 'data',
            },
          ]}
          LinkComponent={component}
          router={router}
        />
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  TopBarProps: PropTypes.shape({}),
};

export default withRouter(Layout);
