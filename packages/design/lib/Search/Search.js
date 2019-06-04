import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Grid';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    logo: {
      cursor: 'pointer',
    },
    separator: {
      color: palette.primary.main,
      lineHeight: 0.5,
      fontSize: 32,
      fontWeight: 700,
    },
    title1: {
      fontSize: 18,
      fontWeight: 500,
    },
    title2: {
      fontSize: 18,
      fontWeight: 300,
    },
    toolbar: {
      backgroundColor: palette.background.paper,
      borderBottom: `1px solid ${palette.grey[isDark ? 700 : 'A100']}`,
      boxShadow: '0 2px 5px rgba(0,0,0,.4)',
      display: 'flex',
      height: 64,
      paddingLeft: spacing(3),
      paddingRight: spacing(3),
      position: 'sticky',
      top: 64,
      zIndex: 1,
    },
  };
});

function Search({
  component,
  filter,
  filterIcon,
  onChange,
  onKeyDown,
  searchIcon,
  searchValue,
}) {
  const classes = useStyles();

  const Logo = () => {
    const LinkComponent = component || 'a';
    return (
      <Grid className={classes.logo} item>
        <LinkComponent href="/insights">
          <Typography>
            <span className={classes.title1}>insights</span>
            <span className={classes.separator}>.</span>
            <span className={classes.title2}>engine</span>
          </Typography>
        </LinkComponent>
      </Grid>
    );
  };

  const SearchInput = () => {
    return (
      <Grid item md={3}>
        <TextField
          fullWidth
          InputProps={{
            endAdornment: searchIcon,
          }}
          inputProps={{ style: { padding: 8, fontSize: 14 } }}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search insights..."
          variant="outlined"
          value={searchValue}
        />
      </Grid>
    );
  };

  const Filter = () => {
    if (!filter) return true;

    return (
      <Grid item>
        <Button
          color="primary"
          onClick={() => {
            console.log('hello');
          }}
        >
          {filterIcon}
          Filter
        </Button>
      </Grid>
    );
  };

  return (
    <div className={classes.toolbar} variant="dense">
      <Grid alignItems="center" container justify="space-between">
        <Logo />
        <SearchInput />
        <Filter />
      </Grid>
    </div>
  );
}

Search.defaultProps = {
  filter: false,
};

export default Search;
