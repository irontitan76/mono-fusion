const path = require('path');
const withTM = require('next-transpile-modules');
 
module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(md|mdx)$/,
        use: [
          {
            loader: 'raw-loader',
          }
        ]
      }
    );

    return config;
  },
  transpileModules: ['@fusion/api', '@fusion/client', '@fusion/design'],
});
