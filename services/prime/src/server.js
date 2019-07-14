import App from './app';
import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import theme from './config/theme.js';

import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { createClient } from './config/apollo';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const client = createClient();

    const sheets = new ServerStyleSheets();


    // Look at renderToStringWithData from 'react-apollo'
    const markup = renderToStringWithData(sheets.collect(
      <ApolloProvider client={client}>
        <StaticRouter context={context} location={req.url}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
              <App />
          </ThemeProvider>
        </StaticRouter>
      </ApolloProvider>)
    ).then(() => {
      const css = sheets.toString();
      const initialApolloState = client.extract();
      const helmet = Helmet.renderStatic();

      if (context.url) {
        res.redirect(context.url);
      } else {
        res.status(200).send(`<!doctype html>
          <html lang="" ${helmet.htmlAttributes.toString()}>
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''
              }
              ${css ? `<style id='jss-server-side'>${css}</style>` : ''}
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
          </head>
          <body ${helmet.bodyAttributes.toString()}>
              <div id="root">${markup}</div>
              <script>
                window.__APOLLO_STATE__ = ${JSON.stringify(
                  initialApolloState
                ).replace(/</g, "\\u003c")}
              </script>
          </body>
          </html>`
        );
      }
    });
  });

export default server;
