import React from "react";

import { IconButton, Typography } from '@material-ui/core';

export function Home() {
  return (
    <>
      <Typography
        component="h1"
        style={{ fontWeight: 500, padding: "25px 40px" }}
        variant="h5"
      >
        Home
      </Typography>
    </>
  );
}

export default Home;