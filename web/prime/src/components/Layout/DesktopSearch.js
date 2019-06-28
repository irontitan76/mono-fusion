import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Grid, IconButton, Input, Tooltip } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    baseInput: {
      color: 'white',
    },
    icon: {
      color: 'white',
      fontSize: 16,
    },
    input: {
      backgroundColor: '#004090',
      display: 'flex',
      flex:1,
      paddingLeft: 12,
      paddingRight: 12,
    },
  };
});

export function DesktopSearch() {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  
  const searchIcon = (
    <FontAwesomeIcon
      className={classes.icon}
      icon={['fal', 'search']}
    />
  );

  const searchComponent = expand
    ? (
      <Input
        autoFocus={true}
        classes={{
          input: classes.baseInput,
        }}
        className={classes.input}
        disableUnderline
        endAdornment={searchIcon}
        onBlur={() => setExpand(false)}
        placeholder='Search'
        variant='outlined'
      />
    ) : (
      <Tooltip title='Search'>
        <IconButton onClick={() => setExpand(true)}>
          {searchIcon}
        </IconButton>
      </Tooltip>
    )

  return (
    <Grid item md={3}>
      <Grid container justify='flex-end'>
        {searchComponent}
        <Tooltip title='Login'>
          <IconButton component={Link} to='/login'>
            <FontAwesomeIcon
              className={classes.icon}
              icon={['fal', 'sign-in']}
            />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default DesktopSearch;