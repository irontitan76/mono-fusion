import React from 'react';

import { Fade, Divider } from '@material-ui/core';
import Intro from './intro';
import Quantum from './quantum';
import Summary from './summary';

export function Data() {
  return (
    <Fade in timeout={700}>
      <div>
        <Intro />
        <Summary />
        <Divider />
        <Quantum />
      </div>
    </Fade>
  );
}

export default Data;