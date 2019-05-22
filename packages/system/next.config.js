const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withTM, { transpileModules: ['@fusion/api', '@fusion/design', '@fusion/corp', '@fusion/main'] }],
], {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(md|mdx|svg)$/,
      use: [
        {
          loader: 'raw-loader',
        },
      ],
    });

    config.module.rules.push({
      test: /\.(css)$/,
      use: [{ loader: 'css-loader' }],
    });

    return config;
  },
  target: 'serverless',
});
