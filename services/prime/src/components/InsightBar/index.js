import React from 'react';
import { Link as RRLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { AppBar, FormControl, Grid, Link, MenuItem, Input, Select, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';
  return {
    appBar: {
      backgroundColor: palette.background.paper,
      top: 48,
    },
    selectMenu: {
      paddingLeft: spacing(2),
    },
    title: {
      '& p:first-child': {
        display: 'inline',
      },
      '& p:nth-child(2)': {
        color: palette.primary.main,
        display: 'inline',
        fontSize: 18,
        fontWeight: 700,
      },
      '& p:last-child': {
        display: 'inline',
        fontWeight: 700,
      },
      color: isDark ? 'white' : 'black',
      cursor: 'pointer',
    },
    toolbar: {
      alignSelf: 'center',
      maxWidth: 1440,
      width: '100%',
    },
  };
});

export function InsightBar({ filter, setFilter }) {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar} variant='dense'>
          <Grid
            alignItems='center'
            container
            justify='space-between'
          >
            <Grid item>
              <Link component={RRLink} to='/insights' underline='none'>
                <Typography className={classes.title} component='div'>
                  <Typography>insights</Typography>
                  <Typography>.</Typography>
                  <Typography>engine</Typography>
                </Typography>
              </Link>
            </Grid>
            <Grid item style={{ minWidth: 150 }}>
              <FormControl
                className={classes.formControl}
                fullWidth
                variant="filled"
              >
                <Select
                  classes={{ selectMenu: classes.selectMenu }}
                  displayEmpty
                  input={
                    <Input
                      disableUnderline
                      id="type"
                      name="type"
                      type="Search"
                    />
                  }
                  onChange={(event) => {
                    const { name, value } = event.target;
                    setFilter({
                      ...filter,
                      [name]: value === "clear" ? undefined : value.toUpperCase(),
                    });
                  }}
                  value={filter.type ? filter.type.toLowerCase() : ""}
                >
                  <MenuItem value="" disabled>Type</MenuItem>
                  {[
                    ["clear", "Clear" ],
                    [ "article", "Article" ],
                    [ "insight", "Insight" ],
                    [ "report", "Report" ],
                  ].map((item) => <MenuItem key={item[0]} value={item[0]}>{item[1]}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar variant='dense' />
    </>
  );
};

export default InsightBar;