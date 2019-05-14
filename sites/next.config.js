const withTM = require('next-transpile-modules');

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(md|mdx|svg)$/,
        use: [
          {
            loader: 'raw-loader',
          }
        ]
      }
    );

    config.module.rules.push(
      {
        test: /\.(css)$/,
        use: [
          { loader: 'css-loader' }
        ]
      }
    );

    return config;
  },
  transpileModules: ['@fusion/api', '@fusion/design', '@fusion/sites'],
});
