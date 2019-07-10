import React, { useEffect, useState } from 'react';

import { Fade, Grid } from '@material-ui/core';

import { H4 } from '../../../components/Heading';
import Banner from '../../../components/Banner';

import Intro from './intro';
import RelatedInsights from './related';
import Steps from './steps';

export function Process() {
  const [topic, setTopic] = useState(0);
  const topics = ['imagine', 'define', 'focus', 'optimize', 'accelerate', 'iterate'];

  useEffect(() => {
    const id = setInterval(() => {
      if (topic === topics.length - 1) {
        return setTopic(0);
      }
  
      return setTopic(topic + 1);
    }, 2000);

    return () => clearInterval(id);
  });

  return (
    <Fade in timeout={700}>
      <div>
        <Intro topic={topics[topic]} />
        <Steps />
        <Banner
          button='Contact us'
          message='Learn more about our project management workflows'
          to='/locations'
        />

        <Grid container justify='center'>
          <Grid item xs={12}>
            <H4>Let's solve the process problem</H4>
            {/* Solve the project management problem */}
          </Grid>
        </Grid>
        <RelatedInsights />
      </div>
    </Fade>
  )
}

export default Process;