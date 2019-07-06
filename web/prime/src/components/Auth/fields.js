import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => {
  return {
    field: {
      '&:first-child': {
        marginTop: spacing(3),
      },
      '&:last-child': {
        marginBottom: spacing(3),
      },
      marginBottom: spacing(2),
    },
  };
});

export function LoginFields({ fields }) {
  const classes = useStyles();

  return (
    <Grid item xs={9}>
      {
        fields.map((field, index) => {
          return (
            <TextField
              autoFocus={index === 0}
              className={classes.field}
              fullWidth
              key={field.label}
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
            />
          )
        })
      }
    </Grid>
  );
}

export default LoginFields;