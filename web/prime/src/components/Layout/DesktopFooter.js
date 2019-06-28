import React from 'react';
import { Link as RRLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Grid, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    item: {
      color: isDark ? 'white': '#313131',
      padding: 0,
    },
    footer: {
      backgroundColor: isDark ? '#414141' : '#f2f2f2',
      borderTop: `1px solid ${isDark ? '#515151' : '#dedede'}`,
      marginTop: 48,
      padding: spacing(4),
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
    'Standards': '/standards',
    'Strategy': '/strategy',
  },
  'Values': {
    'Innovators at heart': '/values/innovators-at-heart',
    'Bias for righteous action': '/values/bias-for-righteous-action',
    'Challenge respectfully': '/values/challenge-respectfully',
    'Be compassionate': '/values/be-compassionate',
    'Collaborate effectively': '/values/collaborate-effectively',
  },
  'Policy': {
    'Privacy policy': '/policy/privacy',
    'Cookies policy': '/policy/cookies',
    'Terms of use': '/policy/terms-of-use',
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
    <Grid className={classes.footer} component='footer' container>
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
  );
}

export default DesktopFooter;