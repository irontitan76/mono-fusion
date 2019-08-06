import http from 'http';

let app = require('./server').default;

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, error => {
  if (error) {
    console.log(error);
  }

  console.log('[ FUSION ] Prime service started. 🚀');
});

if (module.hot) {
  console.log('[ FUSION ] Server-side HMR Enabled. ✅');

  module.hot.accept('./server', () => {
    console.log('[ FUSION ] HMR Reloading `./server`... 🔁');

    try {
      app = require('./server').default;
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
