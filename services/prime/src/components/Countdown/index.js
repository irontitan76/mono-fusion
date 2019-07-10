import React, { useEffect, useState } from 'react';

import { Fade } from '@material-ui/core';

export function cd(to) {
  const start = to || new Date("Jan 1, 2020 00:00:00").getTime();
  const now = new Date().getTime();
  const until = start - now;

  const days = Math.floor(until / (1000 * 60 * 60 * 24));
  const hours = Math.floor((until % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((until % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((until % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export function Countdown({ fade, to }) {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const x = setInterval(() => {
      const until = cd(to);
      setCountdown(until);
      if (until < 0) clearInterval(x);
    }, 1000);

    return () => clearInterval(x);
  });

  if (fade) {
    return (
      <Fade in={!!countdown} timeout={1000}>
        <span>{countdown}</span>
      </Fade>
    );
  } else {
    return countdown
  }
}

export default Countdown;