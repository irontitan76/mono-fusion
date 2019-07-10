import App from './app';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import theme from './config/theme.js';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return ( 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider> 
  );
}

hydrate(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
