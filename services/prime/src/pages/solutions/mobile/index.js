import React from 'react';

import { Divider } from '@material-ui/core';

import Intro from './intro';
import Paths from './paths';

export function Mobile() {
  const paths = [
    { 
      benefits: [
        'Written in the Dart programming language',
      ],
      name: 'Flutter',
      desc: `
        Flutter is Google’s portable UI toolkit for 
        building beautiful, natively-compiled applications
        for mobile, web, and desktop from a single codebase.
      `,
    },
    {
      benefits: [
        'Written in JavaScript programming language',
      ],
      name: 'React Native',
      desc: `
        React Native lets you build mobile apps using only
        JavaScript.
      `,
    },
    {
      name: 'Android',
      desc: 'Building a game?'
    },
    {
      name: 'iOS',
      desc: 'Is performance a significant concern?'
    },
  ];

  return (
    <>
      <Intro />
      <Divider />
      <Paths paths={paths} />
      <Divider />
    </>
  );
}

export default Mobile; 