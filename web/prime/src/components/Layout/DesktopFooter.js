import React from 'react';
import { Link as RRLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Grid, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    container: {
      margin: 'auto',
      maxWidth: 1440,
    },
    item: {
      color: isDark ? 'white': '#313131',
      padding: 0,
    },
    footer: {
      backgroundColor: isDark ? '#414141' : '#f2f2f2',
      borderTop: `1px solid ${isDark ? '#515151' : '#dedede'}`,
      marginTop: 48,
      padding: spacing(4),
      paddingLeft: spacing(8),
      width: '100vw',
    },
    text: {
      fontSize: 12,
      fontWeight: 300,
    },
  };
});

const FOOTER_ITEMS = {
  'Company': {
    'Leadership': '/leadership',
    'Career opportunities': '/careers',
    'Locations': '/locations',
    'Standards': '/insights/5cfcb95802743900079c6388',
    'Strategy': '/insights/5cfcb95e02743900079c6389',
  },
  'Values': {
    'Innovators at heart': '/values/innovators-at-heart',
    'Bias for righteous action': '/values/bias-for-righteous-action',
    'Challenge respectfully': '/values/challenge-respectfully',
    'Be compassionate': '/values/be-compassionate',
    'Collaborate effectively': '/values/collaborate-effectively',
  },
  'Policy': {
    'Privacy policy': '/policy/5d007c0f02743900079c6399',
    'Cookies policy': '/policy/5d007c1b02743900079c639a',
    'Terms of use': '/policy/5d007bff02743900079c6398',
  },
  'Social': {
    'Instagram': '',
    'Twitter': '',
    'Facebook': '',
    'LinkedIn': '',
    'YouTube': '',
  },
};

export function DesktopFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid className={classes.container} container justify='center'>
        {
          Object.keys(FOOTER_ITEMS).map((item) => {
            return (
              <Grid item key={item} md={3} xs={12}>
                <Typography>{item}</Typography>
                <List>
                  {Object.keys(FOOTER_ITEMS[item]).map((key) => {
                    return (
                      <Link
                        component={RRLink}
                        key={key}
                        to={FOOTER_ITEMS[item][key]}
                        underline='none'
                      >
                        <ListItem className={classes.item}>
                          <ListItemText
                            primary={key}
                            primaryTypographyProps={{ className: classes.text }}
                          />
                        </ListItem>
                      </Link>
                    )
                  })}
                </List>
              </Grid>
            )
          })
        }
      </Grid>
    </footer>
  );
}

export default DesktopFooter;